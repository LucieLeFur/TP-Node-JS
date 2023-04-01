const  express = require('express');
const  router = express.Router();

var viewsController = require('../controllers/views.controller')

router.route("/creerUtilisateur").get(viewsController.creerUtilisateur);

router.route("/ajouterItemRegistre").get(viewsController.ajouterItemRegistre);

router.route("/ajouterItemWatchlist").get(viewsController.ajouterItemWatchlist);

router.route("/creerWatchlistUtilisateur").get(viewsController.creerWatchlistUtilisateur);

router.route("/modifierUtilisateur").get(viewsController.modifierUtilisateur);
               
router.route("/rechercherWatchlistUtilisateur").get(viewsController.rechercherWatchlistUtilisateur);

router.route("/ajouterItemRegistre").get(viewsController.ajouterItemRegistre);

router.route("/modifierStatutWathchlistItem").get(viewsController.modifierStatutWathchlistItem);

router.route("/rechercherItemRegistre").get(viewsController.rechercherItemRegistre);

router.route("/rechercherContenuWatchlist").get(viewsController.rechercherContenuWatchlist);

module.exports = router;

