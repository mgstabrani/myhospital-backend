const {
  getAllPatients, getAdmin, getAllAppoinments, createPatient,
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
    path: '/appoinments',
    handler: getAllAppoinments,
  },
  {
    method: 'POST',
    path: '/patients',
    handler: createPatient,
  },
];

module.exports = routes;
