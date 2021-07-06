const { patiens, admin, appoinments } = require('./data');

const getAllPatients = (request, h) => {
  const response = h.response({
    status: 'success',
    data: {
      patiens,
    },
  });

  response.code(200);
  return response;
};

const getAdmin = (request, h) => {
  const response = h.response({
    status: 'success',
    data: {
      admin,
    },
  });

  response.code(200);
  return response;
};

const getAllAppoinments = (request, h) => {
  const response = h.response({
    status: 'success',
    data: {
      appoinments,
    },
  });

  response.code(200);
  return response;
};

module.exports = { getAllPatients, getAdmin, getAllAppoinments };
