const Models = require('./models');

class PatientRepository {
  constructor() {
    this.patientModel = Models.Patient;
  }

  async findAll(offset, limit) {
    return this.patientModel
      .findAndCountAll({
        order: [['updatedAt', 'DESC']],
        attributes: ['id'],
        limit,
        offset,
        raw: true,
      })
      .then((patients) => ({
        count: patients.count,
        rows: patients.rows.map(
          (patients.rows, ((patient) => patient.id)),
        ),
      }));
  }

  async findById(id) {
    return this.patientModel
      .findOne({
        where: { id: parseInt(id, 10) },
        raw: true,
      })
      .then((patient) => patient);
  }

  async create(patient) {
    return this.patientModel
      .create(patient)
      .then((result) => result);
  }

  async update(patient) {
    return this.patientModel
      .update(patient, {
        where: {
          id: patient.id,
        },
      })
      .then((result) => result);
  }

  async delete(id) {
    return this.patientModel
      .destroy({
        where: {
          id: parseInt(id, 10),
        },
      })
      .then((result) => result);
  }
}

module.exports = PatientRepository;
