const mysql = require('mysql');

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;
const dbName = process.env.DB_NAME; // Adicione o nome do seu banco de dados aqui
const dbHost = process.env.DB_HOST;

// Configurações de conexão com o banco de dados
const connection = mysql.createConnection({
  host: dbHost,
  user: dbUser,
  password: dbPassword,
  database: dbName
});

module.exports = connection;
