class AdminController {
  constructor(adminUsecase) {
    this.adminUsecase = adminUsecase;
    this.getAllAdmin = this.getAllAdmin.bind(this);
    this.getAdminById = this.getAdminById.bind(this);
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
}

module.exports = AdminController;
