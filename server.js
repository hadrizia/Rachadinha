const express = require('express');
const path = require('path');
const forceSsl = require('force-ssl-heroku');
const logger = require('heroku-logger');
const cors = require('cors');

const deputados = require('./server/routes/deputados');
const nodes = require('./server/routes/nodes');
const links = require('./server/routes/links');

const app = express();
app.use(forceSsl);

const corsOptions = {
    origin: ['http://localhost:4200'],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    exposedHeaders: ["authorization"]
};
app.use(cors(corsOptions));

app.get("/api", (req, res) => {
    res.status(200).send("API da rachadinha");
});
app.use('/api/deputados', deputados);
app.use('/api/nodes', nodes);
app.use('/api/links', links);

// Set static folder
app.use(express.static("client/dist"));

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
});

const port = process.env.PORT || 5000;

app.listen(port, () => logger.info(`Servidor rodando na porta ${port}`));