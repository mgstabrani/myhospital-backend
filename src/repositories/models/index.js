const Admin = require('./admin');
const Patient = require('./patient');
const Doctor = require('./doctor');
const Appointment = require('./appointment');

Appointment.belongsTo(Doctor, { as: 'doctor' });
Appointment.belongsTo(Patient, { as: 'patient' });

const Models = {};
Models.Admin = Admin;
Models.Patient = Patient;
Models.Doctor = Doctor;
Models.Appointment = Appointment;

module.exports = Models;
