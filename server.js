const express = require('express');
const bd = require('./config/database');

const app = express();

app.listen(3000, () => {
    console.log("Servidor rodando normal");
})