const { findOne, find, insertOne } = require('../services/db/crud');
const ObjectID = require('mongodb').ObjectId;
const Validator = require('jsonschema').Validator;

exports.creerWatchlistUtilisateur = async function (idUtilisateur, nom, description) {
    const watchlistACreer = {
        idUtilisateur: idUtilisateur,
        nom: nom,
        description: description
    };

    const schema = {
        "id": "/Utilisateur",
        "type": "object",
        "properties": {
          "idUtilisateur": {"type": "string"},
          "nom": {"type": "string"},
          "description": {"type": "string"},
          "required": ["idUtilisateur", "nom"],
          "additionalProperties": false
        }
    };

    const validateur = new Validator();
    const resultatValidateur = validateur.validate(watchlistACreer, schema);
    if (resultatValidateur.valid == false) {
      return -1;
    }

    // On vérifie si l'utilisateur existe
    var resultat = await findOne("utilisateurs", {_id: new ObjectID(idUtilisateur)});
    if (resultat == null) {
        return -2;
    }

    resultat =  await insertOne("watchlists", watchlistACreer);

    const id = resultat.insertedId.toString();
    return id;
}

exports.getWachListUtilisateur = async function (idUtilisateur) {
    const query = {
        idUtilisateur: idUtilisateur
    };

    console.log("idUtilisateur", idUtilisateur);
    const resultat = await find("watchlists", query);
    console.log("resultat", resultat);

    return resultat;
}

