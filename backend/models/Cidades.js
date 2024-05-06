const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Atualize o caminho conforme necessário

const Cidade = sequelize.define('Cidade', {
  id_cidade: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome_cidade: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  estado_cidade: {
    type: DataTypes.STRING(50),
    allowNull: true
  }
}, {
  timestamps: false,
  tableName: 'cidades' // Nome da tabela no banco de dados
});

module.exports = Cidade;
