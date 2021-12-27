const { NotFoundError } = require('../helpers/error');
const { getPagination } = require('../helpers/paging');
const { doctor: doctorMessage } = require('../helpers/responseMessage');

class DoctorUsecase {
  constructor(DoctorRepo) {
    this.doctorRepo = DoctorRepo;
  }

  async getAllDoctor(query) {
    const { page, size } = query;
    const { limit, offset } = getPagination(page, size);
    const ids = await this.doctorRepo.findAll(offset, limit);
    return { itemCount: ids.count, data: await this.resolveDoctors(ids.rows) };
  }

  async getDoctorById(id) {
    return this.resolveDoctor(id)
      .then((doctor) => {
        if (!doctor) throw new NotFoundError(doctorMessage.notFound);

        return doctor;
      });
  }

  async createDoctor(payload) {
    return this.doctorRepo
      .create(payload)
      .then((doctor) => doctor);
  }

  async resolveDoctors(ids) {
    const doctors = [];
    await Promise.all(
      ids.map(async (id) => {
        await this.resolveDoctor(id).then((doctor) => {
          doctors.push(doctor);
        });
      }),
    );

    return doctors;
  }

  async resolveDoctor(id) {
    return this.doctorRepo
      .findById(id)
      .then(async (doctor) => doctor);
  }
}

module.exports = DoctorUsecase;
