const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Participant = sequelize.define('Participant', {
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  interests: { 
    type: DataTypes.ARRAY(DataTypes.STRING), 
    defaultValue: []
  },
});

module.exports = Participant;