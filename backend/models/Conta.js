const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Atualize o caminho conforme necessário

const Conta = sequelize.define('Conta', {
  id_conta: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  data_conta: {
    type: DataTypes.DATE,
    allowNull: true
  },
  id_cliente: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  id_venda: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  id_estoque: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  id_empresa: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
}, {
  timestamps: false,
  tableName: 'conta' // Nome da tabela no banco de dados
});

module.exports = Conta;
