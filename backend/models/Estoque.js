const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Estoque = sequelize.define('Estoque', {
  id_estoque: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_produto: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  qtd_prod: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  numero_nf: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
}, {
  timestamps: false,
  tableName: 'estoque'
});

module.exports = Estoque;
