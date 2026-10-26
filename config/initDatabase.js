const pool = require('./database');

async function initDatabase() {
    await pool.query(`
        CREATE TABLE IF NOT EXISTS motos (
            id INT AUTO_INCREMENT PRIMARY KEY,
            modelo VARCHAR(75) NOT NULL,
            marca VARCHAR(75) NOT NULL,
            ano INT NOT NULL,
            placa VARCHAR(7) NOT NULL,
            status ENUM('DISPONIVEL','ALUGADA','MANUTENÇÃO') NOT NULL DEFAULT 'DISPONIVEL'
        ) 
    `);
}

module.exports = initDatabase;