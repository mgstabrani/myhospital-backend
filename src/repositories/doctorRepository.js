const Models = require('./models');

class DoctorRepository {
  constructor() {
    this.doctorModel = Models.Doctor;
  }

  async findAll(offset, limit) {
    return this.doctorModel
      .findAndCountAll({
        order: [['updatedAt', 'DESC']],
        attributes: ['id'],
        limit,
        offset,
        raw: true,
      })
      .then((doctors) => ({
        count: doctors.count,
        rows: doctors.rows.map(
          (doctors.rows, ((doctor) => doctor.id)),
        ),
      }));
  }

  async findById(id) {
    return this.doctorModel
      .findOne({
        where: { id: parseInt(id, 10) },
        raw: true,
      })
      .then((doctor) => doctor);
  }

  async create(doctor) {
    return this.doctorModel
      .create(doctor)
      .then((result) => result);
  }
}

module.exports = DoctorRepository;
