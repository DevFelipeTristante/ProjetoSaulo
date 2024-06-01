const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Atualize o caminho conforme necessário

const Registro = sequelize.define('Registro', {
  id_registro: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  data_registro: {
    type: DataTypes.DATE,
    allowNull: true
  },
  id_venda: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
}, {
  timestamps: false,
  tableName: 'registros' // Nome da tabela no banco de dados
});

module.exports = Registro;
