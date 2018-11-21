var Client = require('mongodb').MongoClient;
var url = 'mongodb://chapter:tlaznddl@edolramba.iptime.org:27017/admin';
Client.connect(url, {useNewUrlParser: true}, function(err, db){
    if(err) throw err
    console.log("successfully conencte to database.");
    
    var dbo = db.db("chapter");
    var myobj = {name:'Company Inc', address: "Highway 37" };
    dbo.collection("customers").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
    });
});