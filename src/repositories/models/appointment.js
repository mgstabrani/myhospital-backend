const Sequelize = require('sequelize');
const db = require('../../server/database/mysql');

const Appointment = db.define(
  'Appointment',
  {
    time: {
      type: Sequelize.STRING(),
      allowNull: false,
    },
    duration: {
      type: Sequelize.STRING(),
      allowNull: false,
    },
  },
  {
    tableName: 'appointment',
  },
);

module.exports = Appointment;
