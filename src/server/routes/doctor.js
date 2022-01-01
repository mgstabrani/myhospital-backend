module.exports = function doctorRouter(express, doctorController) {
  const router = express.Router();

  router.get('/', doctorController.getAllDoctor);
  router.get('/:id', doctorController.getDoctorById);
  router.post('/', doctorController.createDoctor);
<<<<<<< HEAD
  router.put('/', doctorController.updateDoctor);
  router.delete('/', doctorController.deleteDoctor);
=======
>>>>>>> development

  return router;
};
