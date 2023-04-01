const { find, findOne, insertOne, updateOne } = require('../services/db/crud');
const ObjectID = require('mongodb').ObjectId;
const Validator = require('jsonschema').Validator;

exports.creerUtilisateur = async function (nom, prenom, adresseMail) {
 const utilisateurACreer = {nom: nom, 
                            prenom: prenom,
                            adresseMail: adresseMail};

  const validateur = new Validator();
  const schema = {
        "id": "/Utilisateur",
        "type": "object",
        "properties": {
          "nom": {"type": "string"},
          "prenom": {"type": "string"},
          "adresseMail": {"type": "string", "format": "email"},
          "required": ["nom", "prenom", "adresseMail"],
          "additionalProperties": false
        }
  };

  const resultatValidateur = validateur.validate(utilisateurACreer, schema);
  if (resultatValidateur.valid == false) {
    return -1;
  }

  const resultat = await insertOne("utilisateurs", utilisateurACreer);
  const id = resultat.insertedId.toString();
  return id;
}

exports.modifierUtilisateur = async function (idUtilisateur, nom, prenom, adresseMail) {
  const utilisateurAModifiier = {nom: nom, 
                                prenom: prenom,
                                adresseMail: adresseMail};
  
  const validateur = new Validator();
  const schemaModification= {
         "id": "/Utilisateur",
         "type": "object",
         "properties": {
           "nom": {"type": "string"},
           "prenom": {"type": "string"},
           "adresseMail": {"type": "string", "format": "email"},
           "required": ["nom", "prenom", "adresseMail"],
           "additionalProperties": false
         }
  };
 
  const resultatValidateur = validateur.validate(utilisateurAModifiier, schemaModification);
  if (resultatValidateur.valid == false) {
    return -1;
  }
 
  const filtre = {_id: new ObjectID(idUtilisateur)};

  resultat =  await updateOne("utilisateurs", filtre, {$set: utilisateurAModifiier});
  if (resultat.matchedCount == 0) {
    return -1;
  }

  return resultat.matchedCount;
}

exports.getUtilisateurs = async function () {
   
  const resultat = await find("utilisateurs");
  return resultat;
}


