const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Atualize o caminho conforme necessário

const Telefone = sequelize.define('Telefone', {
  id_telefone: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  numero: {
    type: DataTypes.STRING(50),
    allowNull: true
  }
}, {
  timestamps: false,
  tableName: 'telefones' // Nome da tabela no banco de dados
});

module.exports = Telefone;
