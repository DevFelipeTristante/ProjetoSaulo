const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Atualize o caminho conforme necessário

const Cidade = sequelize.define('Cidade', {
  id_cidade: {
    type: DataTypes.INTEGER,
    primaryKey: true,
<<<<<<< HEAD
    autoIncrement: true
=======
    autoIncrement: true,
    allowNull: false
>>>>>>> a7a8ff1e26a1cf6b7cddc6c57954a568114e9c12
  },
  nome_cidade: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  estado_cidade: {
    type: DataTypes.STRING(50),
    allowNull: true
  }
}, {
  timestamps: false,
  tableName: 'cidades' // Nome da tabela no banco de dados
});

module.exports = Cidade;
