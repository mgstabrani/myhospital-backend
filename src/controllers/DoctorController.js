const { doctor: doctorMessage } = require('../helpers/responseMessage');

class DoctorController {
  constructor(doctorUsecase) {
    this.doctorUsecase = doctorUsecase;
    this.getAllDoctor = this.getAllDoctor.bind(this);
    this.getDoctorById = this.getDoctorById.bind(this);
    this.createDoctor = this.createDoctor.bind(this);
  }

  async getAllDoctor(req, res, next) {
    return this.doctorUsecase
      .getAllDoctor(req.query)
      .then((doctors) => res.json(doctors))
      .catch((error) => next(error));
  }

  async getDoctorById(req, res, next) {
    return this.doctorUsecase
      .getDoctorById(req.params.id)
      .then((doctor) => res.json(doctor))
      .catch((error) => next(error));
  }

  async createDoctor(req, res, next) {
    return this.doctorUsecase
      .createDoctor(req.body)
      .then((doctor) => res.status(201).json({
        message: doctorMessage.create,
        data: doctor,
      }))
      .catch((error) => next(error));
  }
}

module.exports = DoctorController;
