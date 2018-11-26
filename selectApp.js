// mongodb 모듈의 mongoClient 를 요청
var mongoClient = require('mongodb').MongoClient;

// mongodb 접속정보
var url = "mongodb://chapter:Hadoop#02@mps01.com:27017/admin";
var usingdb = "myproject";
var collection = "chapters";

// Data 선택
mongoClient.connect(url, {useNewUrlParser: true}, function(err, database) {
    if(err) throw err;
    console.log("1.Connected correctly to server");
    // DB 선택
    var db = database.db(usingdb);
    // 전체 DB select
    // var allData = db.collection(collection).find();
    // allData.each(function(err, res) {
    //     console.log(res);
    // });
    // 조건 select
    var partData = db.collection(collection).find({Title: 'Show Crash', Number: '1'});
    partData.each(function(err, res) {
        console.log(res);
    });
    database.close(function() {
        console.log("1.Exit connection");
    });
});