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
}

module.exports = AdminRepository;
