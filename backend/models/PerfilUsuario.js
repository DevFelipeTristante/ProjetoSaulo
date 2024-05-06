const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Atualize o caminho conforme necessário

const PerfilUsuario = sequelize.define('PerfilUsuario', {
  id_perfil: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  descricao: {
    type: DataTypes.STRING(35),
    allowNull: true
  }
}, {
  timestamps: false,
  tableName: 'perfil_usuario' // Nome da tabela no banco de dados
});

module.exports = PerfilUsuario;
