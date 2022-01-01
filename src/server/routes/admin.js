module.exports = function adminRouter(express, adminController) {
  const router = express.Router();

  router.get('/', adminController.getAllAdmin);
  router.get('/:id', adminController.getAdminById);
<<<<<<< HEAD
  router.post('/', adminController.createAdmin);
  router.put('/', adminController.updateAdmin);
  router.delete('/', adminController.deleteAdmin);
=======
>>>>>>> development

  return router;
};
