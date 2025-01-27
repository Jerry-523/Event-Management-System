const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Question = sequelize.define('Question', {
  sessionId: { type: DataTypes.INTEGER, references: { model: 'Sessions', key: 'id' } },
  participantId: { type: DataTypes.INTEGER, references: { model: 'Participants', key: 'id' } },
  question: { type: DataTypes.TEXT, allowNull: false },
  status: { type: DataTypes.ENUM('pending', 'answered'), defaultValue: 'pending' },
});

module.exports = Question;
