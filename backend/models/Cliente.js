const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Atualize o caminho conforme necessário

const Cliente = sequelize.define('Cliente', {
  id_cliente: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome_cliente: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  endereco: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  id_telefone: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  tipo_cliente: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  cidade: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
}, {
  timestamps: false,
  tableName: 'cliente' // Nome da tabela no banco de dados
});

module.exports = Cliente;
