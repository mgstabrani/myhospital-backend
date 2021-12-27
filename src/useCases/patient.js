const { NotFoundError } = require('../helpers/error');
const { getPagination } = require('../helpers/paging');
const { patient: patientMessage } = require('../helpers/responseMessage');

class PatientUsecase {
  constructor(PatientRepo) {
    this.patientRepo = PatientRepo;
  }

  async getAllPatient(query) {
    const { page, size } = query;
    const { limit, offset } = getPagination(page, size);
    const ids = await this.patientRepo.findAll(offset, limit);
    return { itemCount: ids.count, data: await this.resolvePatients(ids.rows) };
  }

  async getPatientById(id) {
    return this.resolvePatient(id)
      .then((patient) => {
        if (!patient) throw new NotFoundError(patientMessage.notFound);

        return patient;
      });
  }

  async createPatient(payload) {
    return this.patientRepo
      .create(payload)
      .then((patient) => patient);
  }

  async resolvePatients(ids) {
    const patients = [];
    await Promise.all(
      ids.map(async (id) => {
        await this.resolvePatient(id).then((patient) => {
          patients.push(patient);
        });
      }),
    );

    return patients;
  }

  async resolvePatient(id) {
    return this.patientRepo
      .findById(id)
      .then(async (patient) => patient);
  }
}

module.exports = PatientUsecase;
