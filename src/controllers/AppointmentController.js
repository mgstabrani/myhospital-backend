const { appointment: appointmentMessage } = require('../helpers/responseMessage');

class AppointmentController {
  constructor(appointmentUsecase) {
    this.appointmentUsecase = appointmentUsecase;
    this.getAllAppointment = this.getAllAppointment.bind(this);
    this.getAppointmentById = this.getAppointmentById.bind(this);
    this.createAppointment = this.createAppointment.bind(this);
    this.updateAppointment = this.updateAppointment.bind(this);
    this.deleteAppointment = this.deleteAppointment.bind(this);
  }

  async getAllAppointment(req, res, next) {
    return this.appointmentUsecase
      .getAllAppointment(req.query)
      .then((appointments) => res.json(appointments))
      .catch((error) => next(error));
  }

  async getAppointmentById(req, res, next) {
    return this.appointmentUsecase
      .getAppointmentById(req)
      .then((appointment) => res.json(appointment))
      .catch((error) => next(error));
  }

  async createAppointment(req, res, next) {
    return this.appointmentUsecase
      .createAppointment(req.body)
      .then((appointment) => res.status(201).json({
        message: appointmentMessage.create,
        data: appointment,
      }))
      .catch((error) => next(error));
  }

  async updateAppointment(req, res, next) {
    return this.appointmentUsecase
      .updateAppointment(req.body)
      .then((appointment) => res.json({
        message: appointmentMessage.update,
        data: appointment,
      }))
      .catch((error) => next(error));
  }

  async deleteAppointment(req, res, next) {
    return this.appointmentUsecase
      .deleteAppointment(req.body.id)
      .then(() => res.json({
        message: appointmentMessage.delete,
      }))
      .catch((error) => next(error));
  }
}

module.exports = AppointmentController;
