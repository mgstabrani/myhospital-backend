const Models = require('./models');

class AdminRepository {
  constructor() {
    this.adminModel = Models.Admin;
  }

  async findAll(offset, limit) {
    return this.adminModel
      .findAndCountAll({
        order: [['updatedAt', 'DESC']],
        attributes: ['id'],
        limit,
        offset,
        raw: true,
      })
      .then((admins) => ({
        count: admins.count,
        rows: admins.rows.map(
          (admins.rows, ((admin) => admin.id)),
        ),
      }));
  }

  async findById(id) {
    return this.adminModel
      .findOne({
        where: { id: parseInt(id, 10) },
        raw: true,
      })
      .then((admin) => admin);
  }

  async create(admin) {
    return this.adminModel
      .create(admin)
      .then((result) => result);
  }

  async update(admin) {
    return this.adminModel
      .update(admin, {
        where: {
          id: admin.id,
        },
      })
      .then((result) => result);
  }

  async delete(id) {
    return this.adminModel
      .destroy({
        where: {
          id: parseInt(id, 10),
        },
      })
      .then((result) => result);
  }
}

module.exports = AdminRepository;
