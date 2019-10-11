const express = require('express');
const forceSsl = require('force-ssl-heroku');
const logger = require('heroku-logger');

const deputados = require('./server/routes/deputados');

const app = express();
app.use(forceSsl);

app.use('/api/deputados', deputados);

// Set static folder
app.use(express.static("client/build"));

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

const port = process.env.PORT || 5000;

app.listen(port, () => logger.info(`Servidor rodando na porta ${port}`));