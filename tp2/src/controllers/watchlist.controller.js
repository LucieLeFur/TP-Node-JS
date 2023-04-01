var watchService = require('../repositories/watchlist.service')    

exports.creerWatchListUtilisateur = async function (req, res, next) {
    
    try {
        const idUtilisateur = req.body.idUtilisateur;
        const nom = req.body.nom;
        const description = req.body.description;

        const retour = await watchService.creerWatchlistUtilisateur(idUtilisateur, nom, description);

        if (retour === -1) {
            return res.status(400).json({ status: 400, message: "Erreur à la création de la watchlist" });
        }
        else 
        if (retour === -2) {
            return res.status(400).json({ status: 400, message: "Erreur l'utilisateur n'a pas été trouvé" });
        }

        return res.status(200).json({ status: 200, id: retour, message: "Création avec succès de la watchlist" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.rechercherWatchlistUtilisateurs = async function (req, res, next) {
    
    try {
        const idUtilisateur = req.body.idUtilisateur;
        const listWatchlists = await watchService.getWachListUtilisateur(idUtilisateur);

        return res.status(200).json(listWatchlists);
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

