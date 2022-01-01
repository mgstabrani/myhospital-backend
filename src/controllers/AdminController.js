const { admin: adminMessage } = require('../helpers/responseMessage');

class AdminController {
  constructor(adminUsecase) {
    this.adminUsecase = adminUsecase;
    this.getAllAdmin = this.getAllAdmin.bind(this);
    this.getAdminById = this.getAdminById.bind(this);
    this.createAdmin = this.createAdmin.bind(this);
    this.updateAdmin = this.updateAdmin.bind(this);
    this.deleteAdmin = this.deleteAdmin.bind(this);
  }

  async getAllAdmin(req, res, next) {
    return this.adminUsecase
      .getAllAdmin(req.query)
      .then((admins) => res.json(admins))
      .catch((error) => next(error));
  }

  async getAdminById(req, res, next) {
    return this.adminUsecase
      .getAdminById(req.params.id)
      .then((admin) => res.json(admin))
      .catch((error) => next(error));
  }

  async createAdmin(req, res, next) {
    return this.adminUsecase
      .createAdmin(req.body)
      .then((patient) => res.status(201).json({
        message: adminMessage.create,
        data: patient,
      }))
      .catch((error) => next(error));
  }

  async updateAdmin(req, res, next) {
    return this.adminUsecase
      .updateAdmin(req.body)
      .then((admin) => res.json({
        message: adminMessage.update,
        data: admin,
      }))
      .catch((error) => next(error));
  }

  async deleteAdmin(req, res, next) {
    return this.adminUsecase
      .deleteAdmin(req.body.id)
      .then(() => res.json({
        message: adminMessage.delete,
      }))
      .catch((error) => next(error));
  }
}

module.exports = AdminController;
