const { Sequelize } = require('sequelize');
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;
const dbName = process.env.DB_NAME; // Adicione o nome do seu banco de dados aqui
const dbHost = process.env.DB_HOST; // Adicione o host do seu banco de dados aqui

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: 'mysql'
});

sequelize.authenticate()
  .then(() => console.log('Conectou ao banco'))
  .catch(error => console.error('Não foi possível conectar ao banco:', error));

module.exports = sequelize;
