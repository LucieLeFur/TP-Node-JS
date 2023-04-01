const { getMovie } = require('../services/movies-api.service');
const { findOne, find, insertOne } = require('../services/db/crud');

exports.creerItemDansRegistre = async function (titre) {
    const infosMovie = await getMovie(titre);
    
    const itemRegistre = {
        titre: infosMovie.Title,
        anneeFilm: infosMovie.Year,
        dateSortie: infosMovie.Released,
        duree: infosMovie.Runtime,
        genres: infosMovie.Genre,
        directeur: infosMovie.Director,
        ecrivains: infosMovie.Writer,
        acteurs: infosMovie.Actors,
        scenario: infosMovie.Plot,
        langue: infosMovie.Language,
        pays: infosMovie.Country,
        prix: infosMovie.Awards,
        lienImageAffiche: infosMovie.Poster,
        note: infosMovie.imdbRating,
        nombreVote: infosMovie.imdbVotes,
        type: infosMovie.Type,
        dateSortieDvd: infosMovie.DVD,
        boxOffice: infosMovie.BoxOffice,
        production: infosMovie.Production,
        imdbID: infosMovie.imdbID
    }

    // On va ajouter l'item dans le registre
    const resultat = await insertOne("registres", itemRegistre);
    const id = resultat.insertedId.toString();
    console.log("id : " + id);
    return {id: id, titre: infosMovie.Title, annee: infosMovie.Year, dateSortie: infosMovie.Released};
}

exports.rechercherItemRegistre = async function (titre, annee, genre, acteur) {

    const filtre = {};
    console.log("titre", titre);
    if (titre != "") {
        filtre["titre"] = new RegExp(titre, 'i') 
    }

    if (annee != "") {
        filtre["anneeFilm"] = new RegExp(annee, 'i') 
    }

    if (genre != "") {
        filtre["genres"] = new RegExp(genre, 'i') 
    }

    if (acteur != "") {
        filtre["acteurs"] = new RegExp(acteur, 'i') 
    }

    console.log("filtre", filtre);
   
    const resultat = await find("registres", filtre);
    return resultat;
  }
  
