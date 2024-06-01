const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Atualize o caminho conforme necessário

const ItemPedido = sequelize.define('ItemPedido', {
  id_item: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_venda: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  id_produto: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  id_tabela: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  preco: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true
  },
  quantidade: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
}, {
  timestamps: false,
  tableName: 'itenspedido' // Nome da tabela no banco de dados
});

module.exports = ItemPedido;