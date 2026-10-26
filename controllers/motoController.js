const motoService = require('../services/motoService');

async function register(req, res) {
    try {
        const moto = await motoService.registerBike(req.body);
        return res.status(201).json(moto);
        
    } catch(error) {
        if(error.status) {
            return res.status(error.status).json({error: error.message});
        }
        console.error(error);
        return res.status(500).json({error: "Erro ao cadastrar a moto!"});
    }
}

module.exports = {register};