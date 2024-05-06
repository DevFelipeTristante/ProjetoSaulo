const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Atualize o caminho conforme necessário

const NotaFiscalFornecedor = sequelize.define('NotaFiscalFornecedor', {
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
  id_estoque: {
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
  tableName: 'nota_fiscal_fornecedor' // Nome da tabela no banco de dados
});

module.exports = NotaFiscalFornecedor;
