const assert = require('assert');

exports.insertDocument = (db, document, collection, callback) => {
    const coll = db.collection(collection);
    coll.insert(document, (err, result) => {
	assert.equal(err, null);

	console.log("Inserted " + result.result.n + "documents into the collectio " + collection);
	callback(result);
    });
};

exports.findDocuments = (db, collection, callback) => {

};
