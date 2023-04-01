var utilisateurService = require('../repositories/utilisateur.service')    

exports.creerUtilisateur = async function (req, res, next) {
    
        try {
            const nom = req.body.nom;
            const prenom = req.body.prenom;
            const adresseMail = req.body.adresseMail;

            const id = await utilisateurService.creerUtilisateur(nom, prenom, adresseMail);
            if (id === -1) {
                return res.status(400).json({ status: 400, message: "Les données de l'utilisateur sont pas correctes" });
            }
            else {
                return res.status(200).json({ status: 200, id: id, message: "Utilisateur créé avec succès" });
            }
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.modifierUtilisateur = async function (req, res, next) {
    
    try {
        const idUtilisateur = req.params.idUtilisateur;
        const nom = req.body.nom;
        const prenom = req.body.prenom;
        const adresseMail = req.body.adresseMail;

        const id = await utilisateurService.modifierUtilisateur(idUtilisateur, nom, prenom, adresseMail);
        if (id === -1) {
            return res.status(400).json({ status: 400, message: "Problème sur la modification de l'utilisateur" });
        }
        else {
            return res.status(200).json({ status: 200, message: "Utilisateur modifié avec succès" });
        }
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.recherchertUtilisateurs = async function (req, res, next) {
    
    try {
        const listUtilisateurs = await utilisateurService.getUtilisateurs();

         return res.status(200).json(listUtilisateurs);
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}
