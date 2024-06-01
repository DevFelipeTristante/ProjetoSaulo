const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Atualize o caminho conforme necessário

const Usuario = sequelize.define('Usuario', {
  id_usuario: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome_usuario: {
    type: DataTypes.STRING,
    allowNull: true
  },
  id_perfil: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  comissao: {
    type: DataTypes.DOUBLE(9, 2),
    allowNull: true
  },
  senha: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  id_empresa: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
}, {
  timestamps: false,
  tableName: 'usuario' // Nome da tabela no banco de dados
});

module.exports = Usuario;
