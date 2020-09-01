const MongoClient = require('mongodb').MongoClient;;
const assert = require('assert');

const url = 'mongodb://localhost:27017/';
const dbname = 'conFusion';

MongoClient.connect(url, (err, client) => {
    assert.equal(err, null);
    
    console.log('Connected to MongoDB server!');
    
    const db = client.db(dbname);
    const collection = db.collection('nodeMongo');
    collection.insertOne({"name":"Ram"}, (err, result) => {
	assert.equal(err, null);

	console.log("Inserted:", result.ops);

	var cursor = collection.find({});
	cursor.toArray((err, docs) => {
	    assert.equal(err, null);

	    console.log("Documents:\n",docs);

	    db.dropCollection("nodeMongo", (err, res) => {
		assert.equal(err, null);

		console.log("Deleted nodeMongo collection!");
	    });
	    client.close();

	});
    });
});
