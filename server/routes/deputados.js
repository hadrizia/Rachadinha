const express = require('express');
const router = express.Router();

const config = require('../config');
const mongoose = require('mongoose');
mongoose.connect(config.mongoURI, { useNewUrlParser: true });
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Conectado'));

const Deputado = mongoose.model('Deputados', new mongoose.Schema());

router.get('/', (req, res) => {
    Deputado.find({})
        .exec((err, docs) => {
            if (err) res.status(200).send("nada encontrado");
            res.status(200).send(docs);
        });
});

module.exports = router;