const { getCollection } = require('./connection');

async function findOne(collectionName, query, options = {}) {
	try {
		const  collection = getCollection(collectionName);
		const  result = await collection.findOne(query, options);
		return  result;
	} catch (e) {
		console.log(`Erreur lors de l execution de la fonction findOne avec les parametres suivants: ${query}`);
		console.log(e);
		throw  e;
	}
}

async function find(collectionName, query = {}, options = {}) {
	try {
		const  collection = getCollection(collectionName);
		const  result = await collection.find(query).toArray();
		return result;
	} catch (e) {
		console.log(`Erreur lors de l execution de la fonction findAll`);
		console.log(e);
		throw  e;
	}
}

async  function insertOne(collectionName, document, options = {}) {
	try {
		const  collection = getCollection(collectionName);
		const  result = await collection.insertOne(document, options);
		return result;
		console.log(`Bonne insertion`);

	} catch (e) {
		console.log(`Erreur lors de l execution de la fonction insertOne avec les parametres suivants: ${document}`);
		console.log(e);
		throw  e;
	}
}

async  function insertMany(collectionName, documents, options = {}) {
	try {
		const  collection = getCollection(collectionName);
		const  result = await collection.insertMany(documents, options);
		console.log(`Bonne insertion multiple`);
		return result;
	} catch (e) {
		console.log(`Erreur lors de l execution de la fonction insertMany avec les parametres suivants: ${documents}`);
		console.log(e);
		throw  e;
	}
}

async  function updateOne(collectionName, filtre, modifs, options = {}) {
	try {
		const  collection = getCollection(collectionName);
		const  result = await  collection.updateOne(filtre, modifs, options);
		console.log(`Bonne modification`);
		return result;
	} catch (e) {
		console.log(`Erreur lors de l execution de la fonction updateOne avec les parametres suivants: ${filtre} ${modifs}`);
		console.log(e);
		throw  e;
	}
}

async  function updateMany(collectionName, filtre, modifs, options = {}) {
	try {
		const  collection = getCollection(collectionName);
		const  result = await  collection.updateMany(filtre, modifs, options);
		console.log(`Bonnes modifications`);
		return result;
	} catch (e) {
		console.log(`Erreur lors de l execution de la fonction updateMany avec les parametres suivants: ${filtre} ${modifs}`);
		console.log(e);
		throw  e;
	}
}

async  function replace(collectionName, query, modifs, options = {}) {
	try {
		const  collection = getCollection(collectionName);
		const  result = await  collection.replaceOne(query, modifs, options);
		return result;
	} catch (e) {
		console.log(`Erreur lors de l execution de la fonction replace avec les parametres suivants: ${query}`);
		console.log(e);
		throw  e;
	}
}

async  function deleteOne(collectionName, query, options = {}) {
	try {
		const  collection = getCollection(collectionName);
		const  result = await  collection.deleteOne(query, options);
		return result;
	} catch (e) {
		console.log(`Erreur lors de l execution de la fonction deleteOne avec les parametres suivants: ${query}`);
		console.log(e);
		throw  e;
	}
}

async  function deleteMany(collectionName, query, options = {}) {
	try {
		const  collection = getCollection(collectionName);
		const  result = await  collection.insertOne(query, options);
		return result;
	} catch (e) {
		console.log(`Erreur lors de l execution de la fonction deleteMany avec les parametres suivants: ${query}`);
		console.log(e);
		throw  e;
	}
}

module.exports = {
    findOne,
	find,
    insertOne,
	insertMany,
 	updateOne,
 	updateMany,
 	replace,
 	deleteOne,
 	deleteMany
};