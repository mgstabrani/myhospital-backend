const Models = require('./models');

class AdminRepository {
  constructor() {
    this.admminModel = Models.Admin;
  }

  async findAll(offset, limit) {
    return this.admminModel
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
    return this.admminModel
      .findOne({
        where: { id: parseInt(id, 10) },
        raw: true,
      })
      .then((admin) => admin);
  }
}

module.exports = AdminRepository;
