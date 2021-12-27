const { NotFoundError } = require('../helpers/error');
const { getPagination } = require('../helpers/paging');
const { admin: adminMessage } = require('../helpers/responseMessage');

class AdminUsecase {
  constructor(AdminRepo) {
    this.adminRepo = AdminRepo;
  }

  async getAllAdmin(query) {
    const { page, size } = query;
    const { limit, offset } = getPagination(page, size);
    const ids = await this.adminRepo.findAll(offset, limit);
    return { itemCount: ids.count, data: await this.resolveAdmins(ids.rows) };
  }

  async getAdminById(id) {
    return this.resolveAdmin(id)
      .then((admin) => {
        if (!admin) throw new NotFoundError(adminMessage.notFound);

        return admin;
      });
  }

  async resolveAdmins(ids) {
    const admins = [];
    await Promise.all(
      ids.map(async (id) => {
        await this.resolveAdmin(id).then((admin) => {
          admins.push(admin);
        });
      }),
    );

    return admins;
  }

  async resolveAdmin(id) {
    return this.adminRepo
      .findById(id)
      .then(async (admin) => admin);
  }
}

module.exports = AdminUsecase;
