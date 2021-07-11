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

const createPatient = (request, h) => {
  const {
    firstName, lastName, age, email, username, password,
  } = request.payload;

  const newPatient = {
    firstName,
    lastName,
    age,
    email,
    username,
    password,
  };

  patiens.push(newPatient);
  const isSuccess = patiens.filter((patien) => patien.username === username).length > 0;

  if (isSuccess) {
    const response = h.response({
      status: 'success',
      message: 'Patient is successfully added',
      data: {
        username,
      },
    });
    response.code(201);
    return response;
  } const response = h.response({
    status: 'fail',
    message: 'Failed to add patient',
  });
  response.code(500);
  return response;
};

module.exports = {
  getAllPatients, getAdmin, getAllAppoinments, createPatient,
};
