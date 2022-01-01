const Sequelize = require('sequelize');
const db = require('../../server/database/mysql');

const Doctor = db.define(
  'Doctor',
  {
    firstName: Sequelize.STRING(),
    lastName: Sequelize.STRING(),
    age: {
      type: Sequelize.STRING(),
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING(),
      allowNull: false,
      unique: true,
    },
    username: {
      type: Sequelize.STRING(),
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.STRING(),
      allowNull: false,
    },
  },
  {
    tableName: 'doctor',
  },
  {
    indexes: [
      {
        unique: true,
        fields: ['username'],
      },
    ],
  },
);

module.exports = Doctor;
