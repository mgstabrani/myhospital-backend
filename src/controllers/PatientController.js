const { patient: patientMessage } = require('../helpers/responseMessage');

class PatientController {
  constructor(patientUsecase) {
    this.patientUsecase = patientUsecase;
    this.getAllPatient = this.getAllPatient.bind(this);
    this.getPatientById = this.getPatientById.bind(this);
    this.createPatient = this.createPatient.bind(this);
  }

  async getAllPatient(req, res, next) {
    return this.patientUsecase
      .getAllPatient(req.query)
      .then((patients) => res.json(patients))
      .catch((error) => next(error));
  }

  async getPatientById(req, res, next) {
    return this.patientUsecase
      .getPatientById(req.params.id)
      .then((patient) => res.json(patient))
      .catch((error) => next(error));
  }

  async createPatient(req, res, next) {
    return this.patientUsecase
      .createPatient(req.body)
      .then((patient) => res.status(201).json({
        message: patientMessage.create,
        data: patient,
      }))
      .catch((error) => next(error));
  }
}

module.exports = PatientController;
