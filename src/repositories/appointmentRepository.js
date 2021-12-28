const Models = require('./models');

class AppointmentRepository {
  constructor() {
    this.appointmentModel = Models.Appointment;
  }

  async findAll(offset, limit) {
    return this.appointmentModel
      .findAndCountAll({
        order: [['createdAt', 'DESC']],
        attributes: ['id'],
        limit,
        offset,
        raw: true,
      })
      .then((appointments) => ({
        count: appointments.count,
        rows: appointments.rows.map(
          (appointments.rows, (appointment) => appointment.id),
        ),
      }));
  }

  async findById(id) {
    return this.appointmentModel
      .findOne({
        where: { id: parseInt(id, 10) },
        raw: true,
      })
      .then((appointment) => appointment);
  }

  async create(appointment) {
    return this.appointmentModel
      .create(appointment)
      .then((result) => result);
  }

  async update(appointment) {
    return this.appointmentModel
      .update(appointment, {
        where: {
          id: appointment.id,
        },
      })
      .then((result) => result);
  }

  async delete(id) {
    return this.appointmentModel
      .destroy({
        where: {
          id: parseInt(id, 10),
        },
      })
      .then((result) => result);
  }
}

module.exports = AppointmentRepository;
