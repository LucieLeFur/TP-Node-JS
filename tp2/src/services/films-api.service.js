const conf = require("../../conf.json")
// Connection URI
const apiKey = conf.tp2.apiKeyOmdbapi;

const axios = require('axios');

async function getFilm(titreFilm) {
	try {
		const  reponse  = await axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&t=${titreFilm}`)
		return  reponse.data;
	} catch (e) {
		console.log(`Erreur lors de l execution de la fonction pour rechercher un film`);
		console.log(e);
		throw  e;
	}
}

module.exports = {
    getFilm
};