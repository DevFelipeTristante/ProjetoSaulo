const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Atualize o caminho conforme necessário

const Fornecedor = sequelize.define('Fornecedor', {
  id_fornecedor: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome_fornecedor: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  id_cidade: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
}, {
  timestamps: false,
  tableName: 'fornecedor' // Nome da tabela no banco de dados
});

module.exports = Fornecedor;
