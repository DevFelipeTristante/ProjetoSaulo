const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Atualize o caminho conforme necessário

const Produto = sequelize.define('Produto', {
  id_produto: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  descricao_produto: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  id_categoria: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  id_tabela: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  qtd_estoque: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
}, {
  timestamps: false,
  tableName: 'produto' // Nome da tabela no banco de dados
});

module.exports = Produto;
