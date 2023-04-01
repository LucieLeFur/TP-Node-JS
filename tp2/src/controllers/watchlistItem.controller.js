var watchlistItemService = require('../repositories/watchlistItem.service')    

exports.ajouterItemWatListUtilisateur = async function (req, res, next) {
    
    try {
        const idWatchlist = req.body.idWatchlist;
        const idItem = req.body.idItem;
        const statut = req.body.statut;

        const retour = await watchlistItemService.ajouterItemWatchListUtilisateur(idWatchlist, idItem, statut);

        if (retour === -1) {
            return res.status(400).json({ status: 400, message: "La watchlist n'existe pas" });
        }
        else 
        if (retour === -2) {
            return res.status(400).json({ status: 400, message: "L'item n'existe pas dans le registre" });
        }
        else {
          return res.status(200).json({ status: 200, id: retour, message: "Ajout avec succès de l'item dans la watchlist" });
        }
    } catch (e) {
       return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.modifierStatutWathchlistItem = async function (req, res, next) {
    
    try {
        const idWatchlistItem = req.params.identifiant;
        const statut = req.body.statut;

        const retour = await watchlistItemService.modifierStatutWatchlistItem(idWatchlistItem, statut);
        if (retour === -1) {
            return res.status(400).json({ status: 400, message: "Problème sur la modification du statut de l'item de la watchlist" });
        }
        if (retour === -2) {
            return res.status(400).json({ status: 400, message: "L'identifiant n'existe pas" });
        }        
        else {
            return res.status(200).json({ status: 200, message: "statut de l'item de la watchlist modifié avec succès" });
        }
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.rechercherContenuWatchlist = async function (req, res, next) {
    
    try {
        const idWatchlist = req.query.idWatchlist;
        const listContenuWatchlists = await watchlistItemService.getContenuWatchlist(idWatchlist);

        return res.status(200).json(listContenuWatchlists);
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

