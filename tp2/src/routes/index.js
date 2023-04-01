
const express = require("express");

const utilisateurRoute = require('./utilisateur.route');
const itemRoute = require('./item.route');
const watchlistRoute = require('./watchlist.route');
const watchlistItemsRoute = require('./watchlistItem.route');
const viewsRoute = require('./views.route');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { title: 'Watchlist' })
  });
  
router.use("/utilisateurs", utilisateurRoute);
router.use("/items", itemRoute);
router.use("/watchlists", watchlistRoute);
router.use("/watchlistsItems", watchlistItemsRoute);
router.use("/views", viewsRoute);

module.exports = router;
