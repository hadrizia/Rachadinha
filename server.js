const express = require('express');
const path = require('path');
const forceSsl = require('force-ssl-heroku');
const logger = require('heroku-logger');

const deputados = require('./server/routes/deputados');

const app = express();
app.use(forceSsl);

app.get("/api", (req, res) => {
    res.status(200).send("API da rachadinha");
});
app.use('/api/deputados', deputados);

// Set static folder
app.use(express.static("client/dist"));

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
});

const port = process.env.PORT || 5000;

app.listen(port, () => logger.info(`Servidor rodando na porta ${port}`));