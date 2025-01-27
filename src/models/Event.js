const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Event = sequelize.define('Event', {
  title: { type: DataTypes.STRING, allowNull: false },
  category: { type: DataTypes.STRING, allowNull: false },
  date: { type: DataTypes.DATE, allowNull: false },
  location: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT },
  capacity: { type: DataTypes.INTEGER, allowNull: false },
  status: { type: DataTypes.ENUM('ativo', 'inativo'), allowNull: false }
});

module.exports = Event;