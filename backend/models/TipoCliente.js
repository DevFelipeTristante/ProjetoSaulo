const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Atualize o caminho conforme necessário

const TipoCliente = sequelize.define('TipoCliente', {
  id_tipo: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  tipo_cliente: {
    type: DataTypes.STRING(50),
    allowNull: true
  }
}, {
  timestamps: false,
  tableName: 'tipo_cliente' // Nome da tabela no banco de dados
});

module.exports = TipoCliente;
