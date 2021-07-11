/* eslint-disable max-len */
const {
  getAllPatients, getAdmin, getAllAppointments, createPatient, createAppointment, deleteAppointment, updateAppointment, getListOfRegByIdAppointment, applyAppointmentById,
} = require('./handler');

const routes = [
  {
    method: 'GET',
    path: '/patients',
    handler: getAllPatients,
  },
  {
    method: 'GET',
    path: '/admin',
    handler: getAdmin,
  },
  {
    method: 'GET',
    path: '/appointments',
    handler: getAllAppointments,
  },
  {
    method: 'POST',
    path: '/patients',
    handler: createPatient,
  },
  {
    method: 'POST',
    path: '/appointments',
    handler: createAppointment,
  },
  {
    method: 'DELETE',
    path: '/appointments/{id}',
    handler: deleteAppointment,
  },
  {
    method: 'PUT',
    path: '/appointments/{id}',
    handler: updateAppointment,
  },
  {
    method: 'GET',
    path: '/appointments/list/{id}',
    handler: getListOfRegByIdAppointment,
  },
  {
    method: 'PUT',
    path: '/appointments/apply/{id}',
    handler: applyAppointmentById,
  },
];

module.exports = routes;
