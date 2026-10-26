const motoRepository = require('../repositories/motoRepository');

function error(status, message) {
    const e = new Error(message);
    e.status = status;
    return e;
}


async function registerBike({placa, modelo, marca, ano, status}) {
    if (!placa || !modelo || !marca || !ano) {
        throw error(400, "Todos os campos são obrigatórios!");
    }
    
    const statusPermitido = [
        "DISPONIVEL",
        "ALUGADA",
        "MANUTENÇÃO"
    ]

    if(!status) {
        throw new Error(400,"É obrigatório ter um status a moto")
    } if(!statusPermitido.includes(status)) {
        throw new Error(400, "Status inválido!, Insira um status válido: DISPONIVEL, ALUGADA ou MANUTENÇÃO");
    }

    return await motoRepository.createBike({placa, modelo, marca, ano, status});
}

module.exports = { registerBike };