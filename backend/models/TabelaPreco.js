const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Atualize o caminho conforme necessário

const TabelaPreco = sequelize.define('TabelaPreco', {
  id_tabela: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  id_produto: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  preco: {
    type: DataTypes.DECIMAL(9, 2),
    allowNull: true
  }
}, {
  timestamps: false,
  tableName: 'tabela_preco' // Nome da tabela no banco de dados
});

module.exports = TabelaPreco;