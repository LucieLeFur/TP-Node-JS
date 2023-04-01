const  express = require('express');
const  router = express.Router();

var watchlistController = require('../controllers/watchlist.controller')

router.route("/").post(watchlistController.creerWatchListUtilisateur);

router.route("/:idUtilisateur").get(watchlistController.rechercherWatchlistUtilisateurs);

module.exports = router;

