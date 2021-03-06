const { handleError } = require('../helpers/error');

const adminRouter = require('./routes/admin');
const patientRouter = require('./routes/patient');
const doctorRouter = require('./routes/doctor');
const appointmentRouter = require('./routes/appointment');

const AdminRepo = require('../repositories/adminRepository');
const PatientRepo = require('../repositories/patientRepository');
const DoctorRepo = require('../repositories/doctorRepository');
const AppointmentRepo = require('../repositories/appointmentRepository');

const AdminUsecase = require('../useCases/admin');
const PatientUsecase = require('../useCases/patient');
const DoctorUsecase = require('../useCases/doctor');
const AppointmentUsecase = require('../useCases/appointment');

const AdminController = require('../controllers/AdminController');
const PatientController = require('../controllers/PatientController');
const DoctorController = require('../controllers/DoctorController');
const AppointmentController = require('../controllers/AppointmentController');

const adminRepo = new AdminRepo();
const patientRepo = new PatientRepo();
const doctorRepo = new DoctorRepo();
const appointmentRepo = new AppointmentRepo();

const adminUsecases = new AdminUsecase(adminRepo);
const patientUsecases = new PatientUsecase(patientRepo);
const doctorUsecases = new DoctorUsecase(doctorRepo);
const appointmentUsecases = new AppointmentUsecase(appointmentRepo);

const adminControllers = new AdminController(adminUsecases);
const patientControllers = new PatientController(patientUsecases);
const doctorControllers = new DoctorController(doctorUsecases);
const appointmentControllers = new AppointmentController(appointmentUsecases);

module.exports = function routes(app, express) {
  app.use('/admin', adminRouter(express, adminControllers));
  app.use('/patient', patientRouter(express, patientControllers));
  app.use('/doctor', doctorRouter(express, doctorControllers));
  app.use('/appointment', appointmentRouter(express, appointmentControllers));
  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    handleError(err, res);
  });
};
