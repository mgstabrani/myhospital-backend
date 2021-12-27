module.exports = function doctorRouter(express, doctorController) {
  const router = express.Router();

  router.get('/', doctorController.getAllDoctor);
  router.get('/:id', doctorController.getDoctorById);
  router.post('/', doctorController.createDoctor);

  return router;
};
