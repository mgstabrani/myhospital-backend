const { nanoid } = require('nanoid');
const { patiens, admin, appointments } = require('./data');

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
      appointments,
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

const createAppoinment = (request, h) => {
  const {
    doctorName, appoinmentdesc, listOfReg,
  } = request.payload;

  const id = nanoid(16);
  const newAppoinment = {
    id,
    doctorName,
    appoinmentdesc,
    listOfReg,
  };

  appointments.push(newAppoinment);
  const isSuccess = appointments.filter((appoinment) => appoinment.id === id);

  if (isSuccess) {
    const response = h.response({
      status: 'success',
      message: 'Appoinment is successfully created',
      data: {
        id,
      },
    });
    response.code(201);
    return response;
  } const response = h.response({
    status: 'fail',
    message: 'failed to create new appoinment',
  });
  response.code(500);
  return response;
};

const deleteAppointment = (request, h) => {
  const { id } = request.params;

  const index = appointments.findIndex((appointment) => appointment.id === id);

  if (index !== -1) {
    appointments.splice(index, 1);
    const response = h.response({
      status: 'success',
      message: 'appointment is successfully deleted',
    });
    response.code(200);
    return response;
  }
  const response = h.response({
    status: 'fail',
    message: 'failed to delete appointment',
  });
  response.code(404);
  return response;
};

module.exports = {
  getAllPatients, getAdmin, getAllAppoinments, createPatient, createAppoinment, deleteAppointment,
};
