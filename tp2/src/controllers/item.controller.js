var itemService = require('../repositories/item.service')    

exports.creerItemDansRegistre = async function (req, res, next) {
    try {
        const titre = req.body.titre;

        const infosMovie = await itemService.creerItemDansRegistre(titre);
        return res.status(200).json({ status: 200, infosMovie: infosMovie, message: "item créé avec succès dans le registre" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.rechercherItemRegistre = async function (req, res, next) {
    try {
        const titre = req.query.titre;
        const annee = req.query.annee;
        const genre = req.query.genre;
        const acteur = req.query.acteur;

        liste = await itemService.rechercherItemRegistre(titre, annee, genre, acteur);
        return res.status(200).json(liste);
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

