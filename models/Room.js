const { DataTypes } = require('sequelize');
const sequelize = require('../db/config');

const Room = sequelize.define('room', {
  name: {
    type: DataTypes.STRING,
    allowNull:false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull:false,
  },
  time: {
    type: DataTypes.STRING,
    allowNull:false,
  },
  booked: {
    type: DataTypes.BOOLEAN,
    defaultValue:false,
  },
  seat:{
    type: DataTypes.INTEGER,
    allowNull:false,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    allowNull: false,
  },
});
module.exports = Room;
