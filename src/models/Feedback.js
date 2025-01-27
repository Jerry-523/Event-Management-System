const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');

const Feedback = sequelize.define('Feedback', {
    eventId: { type: DataTypes.INTEGER, references: { model: 'Events', key: 'id' } },
    score: { type: DataTypes.INTEGER, allowNull: false },
    comment: { type: DataTypes.TEXT }
  });
  
  module.exports = Feedback;
  