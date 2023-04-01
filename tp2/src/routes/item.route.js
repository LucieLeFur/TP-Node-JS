const  express = require('express');
const  router = express.Router();

var itemController = require('../controllers/item.controller')

router.route("/").post(itemController.creerItemDansRegistre);

router.route("/").get(itemController.rechercherItemRegistre);

module.exports = router;

