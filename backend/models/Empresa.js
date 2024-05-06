const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Atualize o caminho conforme necessário

const Empresa = sequelize.define('Empresa', {
  id_empresa: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  cnpj: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  nome: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  id_cidade: {
    type: DataTypes.INTEGER,
    allowNull: true,
  }
}, {
  timestamps: false,
  tableName: 'empresa' // Nome da tabela no banco de dados
});

module.exports = Empresa;
