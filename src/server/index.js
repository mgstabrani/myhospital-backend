const { handleError } = require('../helpers/error');

const adminRouter = require('./routes/admin');

const AdminRepo = require('../repositories/adminRepository');

const AdminUsecase = require('../useCases/admin');

const AdminController = require('../controllers/AdminController');

const adminRepo = new AdminRepo();

const adminUsecases = new AdminUsecase(adminRepo);

const adminControllers = new AdminController(adminUsecases);

module.exports = function routes(app, express) {
  app.use('/admin', adminRouter(express, adminControllers));
  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    handleError(err, res);
  });
};
