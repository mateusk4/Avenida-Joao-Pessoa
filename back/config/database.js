const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    'seu_database',
    'postgres',
    'sua_senha',
    {
        host: 'localhost',
        dialect: 'postgres',
        logging: false
    }
);

module.exports = sequelize;
