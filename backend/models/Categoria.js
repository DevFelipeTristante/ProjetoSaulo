const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Atualize o caminho conforme necessário

const Categoria = sequelize.define('Categoria', {
  id_categoria: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  categoria: {
    type: DataTypes.STRING(50),
    allowNull: true
  }
}, {
  timestamps: false,
  tableName: 'categoria_produto' // Nome da tabela no banco de dados
});

module.exports = Categoria;
