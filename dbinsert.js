var Client = require('mongodb').MongoClient;
var connUrl;

var chapterData = [{
    'Title': 'Show Crash',
    'Number': '1',
    'Author': 'Neal Stephenson'
    }, 
    {
    'Title': 'Show Crash',
    'Number': '2',
    'Author': 'Neal Stephenson'
    }, 
    {
    'Title': 'Show Crash',
    'Number': '3',
    'Author': 'Neal Stephenson'
    }, 
    {
    'Title': 'Show Crash',
    'Number': '4',
    'Author': 'Neal Stephenson'
    }, 
    {
    'Title': 'Show Crash',
    'Number': '5',
    'Author': 'Neal Stephenson'
    }, 
    {
    'Title': 'Show Crash',
    'Number': '6',
    'Author': 'Neal Stephenson'
    }];

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

    // 접속 Collection(Table) 정보
    var collection = 'chapter';

    Client.connect(connUrl, {useNewUrlParser: true}, function(err, db){
        if(err) throw err;
        console.log("successfully conencte to database.");
        database = db.db("myproject");
        // collection 선택 및 데이터 입력 (여러 데이터)
        database.collection(collection).insertMany(chapterData, function(err, res) {
            if(err) throw err;
            console.log("Success : " + res.ops.length + " chapter inserted!");
        });
        db.close();
        console.log("1.Exit connection");
    });
});




