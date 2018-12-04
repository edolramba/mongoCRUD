var mongoClient = require('mongodb').MongoClient;

var connUrl;

require('dns').lookup(require('os').hostname(), function (err, add, fam) {
    console.log('addr: '+add);

    if (add == '10.208.114.70' ) {
        console.log("This is my company PC");
        connUrl = 'mongodb://chapter:Hadoop#02@mps01.com:27017/admin';
    } else {
        console.log("This is my Home PC");
        connUrl = 'mongodb://chapter:tlaznddl@edolramba.iptime.org:27017/admin';
    }

    console.log(connUrl);

    mongoClient.connect(connUrl, {useNewUrlParser: true}, function(err, db) {
        if(err) throw err;
        console.log("Successfully conencte to database!");
        db.close(function(){
            console.log("ok, it's disconnected");
        });
    });
});

