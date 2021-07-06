const { getAllPatients, getAdmin, getAllAppoinments } = require('./handler');

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
];

module.exports = routes;
