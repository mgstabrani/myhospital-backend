const { handleError } = require('../helpers/error');

const adminRouter = require('./routes/admin');
const patientRouter = require('./routes/patient');
const doctorRouter = require('./routes/doctor');

const AdminRepo = require('../repositories/adminRepository');
const PatientRepo = require('../repositories/patientRepository');
const DoctorRepo = require('../repositories/doctorRepository');

const AdminUsecase = require('../useCases/admin');
const PatientUsecase = require('../useCases/patient');
const DoctorUsecase = require('../useCases/doctor');

const AdminController = require('../controllers/AdminController');
const PatientController = require('../controllers/PatientController');
const DoctorController = require('../controllers/DoctorController');

const adminRepo = new AdminRepo();
const patientRepo = new PatientRepo();
const doctorRepo = new DoctorRepo();

const adminUsecases = new AdminUsecase(adminRepo);
const patientUsecases = new PatientUsecase(patientRepo);
const doctorUsecases = new DoctorUsecase(doctorRepo);

const adminControllers = new AdminController(adminUsecases);
const patientControllers = new PatientController(patientUsecases);
const doctorControllers = new DoctorController(doctorUsecases);

module.exports = function routes(app, express) {
  app.use('/admin', adminRouter(express, adminControllers));
  app.use('/patient', patientRouter(express, patientControllers));
  app.use('/doctor', doctorRouter(express, doctorControllers));
  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    handleError(err, res);
  });
};
