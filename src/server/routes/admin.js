module.exports = function adminRouter(express, adminController) {
  const router = express.Router();

  router.get('/', adminController.getAllAdmin);
  router.get('/:id', adminController.getAdminById);

  return router;
};
