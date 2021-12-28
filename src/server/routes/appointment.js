module.exports = function bahanBakuInResepRouter(express, appointmentController) {
  const router = express.Router();

  router.get('/', appointmentController.getAllAppointment);
  router.get('/:id', appointmentController.getAppointmentById);
  router.post('/', appointmentController.createAppointment);
  router.put('/', appointmentController.updateAppointment);
  router.delete('/', appointmentController.deleteAppointment);

  return router;
};
