const Admin = require('./admin');
const Patient = require('./patient');
const Doctor = require('./doctor');

const Models = {};
Models.Admin = Admin;
Models.Patient = Patient;
Models.Doctor = Doctor;

module.exports = Models;
