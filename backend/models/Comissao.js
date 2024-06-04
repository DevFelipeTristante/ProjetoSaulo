const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Atualize o caminho conforme necessário

const Comissao = sequelize.define('ComissaoVendedor', {
  id_comissao: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_usuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  valor_comissao: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true
  },
  valor_total: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true
  },
  comissao_paga: {
    type: DataTypes.CHAR(1),
    allowNull: false,
    defaultValue: 'N'
  }
}, {
  timestamps: false,
  tableName: 'comissao_vendedor' // Nome da tabela no banco de dados
});

module.exports = Comissao;
