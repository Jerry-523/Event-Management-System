const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');

const Session = sequelize.define('Session', {
    eventId: { type: DataTypes.INTEGER, references: { model: 'Events', key: 'id' } },
    title: { type: DataTypes.STRING, allowNull: false },
    date: { type: DataTypes.DATE, allowNull: false }
  });
  
  module.exports = Session;