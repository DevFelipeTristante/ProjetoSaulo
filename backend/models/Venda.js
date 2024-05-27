const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Atualize o caminho conforme necessário

const Venda = sequelize.define('Venda', {
  id_venda: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_usuario: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  id_produto: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  id_cliente: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  valor_venda: {
    type: DataTypes.DOUBLE(9, 2),
    allowNull: true
  },
  quantidade_prod: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  id_forma: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  qtde_parcelas: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
}, {
  timestamps: false,
  tableName: 'venda' // Nome da tabela no banco de dados
});

module.exports = Venda;
