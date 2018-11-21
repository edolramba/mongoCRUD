// mongodb 모듈의 mongoClient 를 요청
var mongoClient = require('mongodb').MongoClient;

// mongodb 접속정보
var url = "mongodb://mongo.mps01.com:27017/";

// 목차 삽입
var chapters = [{
    'Title': 'Show Crash',
    'Author': 'Neal Stephenson'
    }, 
    {
    'Title': 'Show Crash',
    'Author': 'Neal Stephenson'
    }];

// Data 삽입
function connectDB() {
    mongoClient.connect(url, {useNewUrlParser: true}, function(err, database) {
        if(err) {
            console.log(err);
            throw err;
        }
        else {
            console.log("Connected correctly to server");
            db = database.db('chapters');
            var authUser = function(database, id, password, callback) {
                var users = database.collection('users');
                users.find({"id": id, "password": password}).toArray(function(err, docs) {
                    if(err) {
                        callback(err, null);
                        return;
                    }
                    if(docs.length > 0) {
                        console.log("large");
                    } else {
                        console.log("small");
                    }
                });
            }
        }
        database.close();
        console.log("Exit connection");
    });
}

connectDB();