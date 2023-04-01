const  express = require('express');
const  router = express.Router();

var watchlistItemController = require('../controllers/watchlistItem.controller')

router.route("/").post(watchlistItemController.ajouterItemWatListUtilisateur);

router.route("/:identifiant").post(watchlistItemController.modifierStatutWathchlistItem);

router.route("/contenu").get(watchlistItemController.rechercherContenuWatchlist);

module.exports = router;
