const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Atualize o caminho conforme necessário

const CompraProduto = sequelize.define('CompraProduto', {
  numeroNF: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  valor: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true
  },
  quantidade: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  data_nf: {
    type: DataTypes.DATE,
    allowNull: true
  },
  id_produto: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
}, {
  timestamps: false,
  tableName: 'compra_produto' // Nome da tabela no banco de dados
});

module.exports = CompraProduto;
