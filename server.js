const express = require('express');
const bd = require('./config/database');
const app = express();
require('dotenv').config();

app.listen(3000, () => {
    console.log("Servidor rodando normal");
})