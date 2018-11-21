// 1. mongoose 모듈 가져오기 
var mongoose = require('mongoose');
// 2. testDB 세팅
mongoose.connect('mongodb://edolramba.iptime.org:27017/testDB', { useNewUrlParser: true}, function(err, res) {
    if (err) throw err;
    // 3. 연결된 testDB 사용
    var db = mongoose.connection;   
    // 5. 연결성공
    db.once('open', function() {
        console.log('Connected!');
        db.close();
        console.log('End the coonection')
    });
} );
