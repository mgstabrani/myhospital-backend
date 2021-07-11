const {
  getAllPatients, getAdmin, getAllAppoinments, createPatient, createAppoinment, deleteAppointment,
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
    handler: getAllAppoinments,
  },
  {
    method: 'POST',
    path: '/patients',
    handler: createPatient,
  },
  {
    method: 'POST',
    path: '/appointments',
    handler: createAppoinment,
  },
  {
    method: 'DELETE',
    path: '/appointments/{id}',
    handler: deleteAppointment,
  },
];

module.exports = routes;
