const  express = require('express');
const  router = express.Router();

var utilisateurController = require('../controllers/utilisateur.controller')

router.route("/").post(utilisateurController.creerUtilisateur);

router.route("/:idUtilisateur").post(utilisateurController.modifierUtilisateur);

router.route("/").get(utilisateurController.recherchertUtilisateurs);

module.exports = router;

