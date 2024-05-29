const pool = require('../config/db');

const checkEmailExists = (email) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT email FROM alunos WHERE email = ?', [email], (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results.length > 0);
        });
    });
};

const createAluno = (nome, email, senha) => {
    return new Promise((resolve, reject) => {
        pool.query('INSERT INTO alunos (nome, email, senha) VALUES (?, ?, ?)', [nome, email, senha], (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results.insertId);
        });
    });
};

module.exports = {
    checkEmailExists,
    createAluno
};
