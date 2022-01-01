module.exports = function patientRouter(express, patientController) {
  const router = express.Router();

  router.get('/', patientController.getAllPatient);
  router.get('/:id', patientController.getPatientById);
  router.post('/', patientController.createPatient);
  router.put('/', patientController.updatePatient);
  router.delete('/', patientController.deletePatient);

  return router;
};
