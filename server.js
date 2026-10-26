
require('dotenv').config();

const express = require('express');
const initDatabase = require('./config/initDatabase');
const motoRoutes = require('./routes/motoRoutes');

const app = express();

app.use(express.json());
app.use('/', motoRoutes);

const PORT = process.env.PORT || 3000;

async function startServer() {
    try {
        await initDatabase();

        app.listen(PORT, () => {
            console.log(`Servidor rodando normalmente na porta ${PORT}`);
        });

    } catch (error) {
        console.error('Erro ao inicializar o banco:', error);
        process.exit(1);
    }
}

startServer();
