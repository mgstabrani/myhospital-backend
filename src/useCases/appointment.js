const { NotFoundError } = require('../helpers/error');
const { getPagination } = require('../helpers/paging');
const { appointment: appointmentMessage } = require('../helpers/responseMessage');

class AppointmentUsecase {
  constructor(AppointmentRepo) {
    this.appointmentRepo = AppointmentRepo;
  }

  async getAllAppointment(query) {
    const {
      page, size, doctorId, patientId,
    } = query;
    const { limit, offset } = getPagination(page, size);
    const ids = await this.appointmentRepo.findAll(offset, limit, doctorId, patientId);
    return { itemCount: ids.count, data: await this.resolveAppointments(ids.rows) };
  }

  async getAppointmentById(req) {
    return this.resolveAppointment(req.params.id)
      .then((appointment) => {
        if (!appointment) throw new NotFoundError(appointmentMessage.notFound);

        return appointment;
      });
  }

  async createAppointment(payload) {
    return this.appointmentRepo
      .create(payload)
      .then((result) => result);
  }

  async updateAppointment(paylod) {
    await this.appointmentRepo
      .findById(paylod.id)
      .then((appointment) => {
        if (!appointment) throw new NotFoundError(appointmentMessage.notFound);

        return this.appointmentRepo.update(paylod);
      });
  }

  async deleteAppointment(id) {
    await this.appointmentRepo
      .findById(id)
      .then((appointment) => {
        if (!appointment) throw new NotFoundError(appointmentMessage.notFound);

        return this.appointmentRepo.delete(id);
      });
  }

  async resolveAppointments(ids) {
    const appointments = [];
    await Promise.all(
      ids.map(async (id) => {
        await this.resolveAppointment(id).then((appointment) => {
          appointments.push(appointment);
        });
      }),
    );

    return appointments;
  }

  async resolveAppointment(id) {
    return this.appointmentRepo
      .findById(id)
      .then(async (appointment) => appointment);
  }
}

module.exports = AppointmentUsecase;
