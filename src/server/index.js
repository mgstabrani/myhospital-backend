const { handleError } = require('../helpers/error');

const adminRouter = require('./routes/admin');
const patientRouter = require('./routes/patient');

const AdminRepo = require('../repositories/adminRepository');
const PatientRepo = require('../repositories/patientRepository');

const AdminUsecase = require('../useCases/admin');
const PatientUsecase = require('../useCases/patient');

const AdminController = require('../controllers/AdminController');
const PatientController = require('../controllers/PatientController');

const adminRepo = new AdminRepo();
const patientRepo = new PatientRepo();

const adminUsecases = new AdminUsecase(adminRepo);
const patientUsecases = new PatientUsecase(patientRepo);

const adminControllers = new AdminController(adminUsecases);
const patientControllers = new PatientController(patientUsecases);

module.exports = function routes(app, express) {
  app.use('/admin', adminRouter(express, adminControllers));
  app.use('/patient', patientRouter(express, patientControllers));
  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    handleError(err, res);
  });
};
