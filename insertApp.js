// mongodb 모듈의 mongoClient 를 요청
var mongoClient = require('mongodb').MongoClient;

// mongodb 접속정보
var url = "mongodb://chapter:Hadoop#02@mps01.com:27017/admin";
var collection = 'chapters';
// Data 세팅
var chapters = [{
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

// Data 삽입
mongoClient.connect(url, {useNewUrlParser: true}, function(err, database) {
    if(err) throw err;
    console.log("1.Connected correctly to server");
    // DB 선택
    var db = database.db("myproject");
    /* 데이터 한 개 세팅
    var myobj = {name: "Company Inc", address: "Highway 37"};
    // collection 선택 및 데이터 입력
    db.collection("chapters").insertOne(myobj, function(err, res) {
        if(err) throw err;
        console.log("1 document inserted!");
        database.close();
    })
    */
    // collection 선택 및 데이터 입력 (여러 데이터)
    db.collection(collection).insertMany(chapters, function(err, res) {
        if(err) throw err;
        console.log("Success : " + res.ops.length + " chapters inserted!");
    });
    database.close();
    console.log("1.Exit connection");
});