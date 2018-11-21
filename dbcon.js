var mongoClient = require('mongodb').MongoClient;
var connUrl = 'mongodb://chapter:tlaznddl@edolramba.iptime.org:27017/admin';
mongoClient.connect(connUrl, {useNewUrlParser: true}, function(err, db) {
    if(err) throw err;
    console.log("Successfully conencte to database!");
    db.close(function(){
        console.log("ok, it's disconnected");
    });
});