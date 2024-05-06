const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Update the path as needed

const FormaPagamento = sequelize.define('FormaPagamento', {
  id_forma: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  descricao: {
    type: DataTypes.STRING(35),
    allowNull: true
  },
}, {
  timestamps: false,
  tableName: 'f_pagamento' // Name of the table in the database
});

module.exports = FormaPagamento;
