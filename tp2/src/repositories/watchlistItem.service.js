const { findOne, find, updateOne, insertOne } = require('../services/db/crud');
const ObjectID = require('mongodb').ObjectId;
const Validator = require('jsonschema').Validator;

exports.ajouterItemWatchListUtilisateur = async function (idWatchlist, idItem, statut) {

    // On va vérifier si la watchlist existe
    const filtreWatchlist = {_id: new ObjectID(idWatchlist)};

    resultatWathlist =  await findOne("watchlists", filtreWatchlist);
    if (resultatWathlist == null) {
      return -1;
    }

    // On va vérifier si l'item existe dans le registre
    const filtreItem = {_id: new ObjectID(idItem)};

    resultatItem =  await findOne("registres", filtreItem);
    if (resultatItem == null) {
      return -2;
    }

    let watchlistItem = resultatItem;
    watchlistItem["idUtilisateur"] = resultatWathlist.idUtilisateur;
    watchlistItem["idWatchlist"] = resultatWathlist._id;
    watchlistItem["statut"] = statut;
    
    const resultatInsert = await insertOne("watchlistsItems", watchlistItem);
    const id = resultatInsert.insertedId.toString();
    return id;
}

exports.modifierStatutWatchlistItem = async function (idWatchlistItem, statut) {
    
  const watchlistItemStatutModif = {statut: statut};
  
  const validateur = new Validator();
  const schemaModificationStatut= {
         "id": "/watchlistItemStatut",
         "type": "object",
         "properties": {
           "statut": {"type": "string"},
           "required": ["statut"],
           "additionalProperties": false
         }
  };
 
  const resultatValidateur = validateur.validate(watchlistItemStatutModif, schemaModificationStatut);
  if (resultatValidateur.valid == false) {
    return -1;
  }
 
  const filtre = {_id: new ObjectID(idWatchlistItem)};

  resultat =  await updateOne("watchlistsItems", filtre, {$set: watchlistItemStatutModif});
  if (resultat.matchedCount == 0) {
    return -2;
  }

  return resultat.matchedCount;
}

exports.getContenuWatchlist = async function (idWatchlist) {
  const query = {
    idWatchlist: new ObjectID(idWatchlist)
  };

  const resultat = await find("watchlistsItems", query);

  return resultat;
}





