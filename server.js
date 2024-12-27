var express = require('express');
var app = express();

var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.send('Hello World');
})
app.get('/index.html', function (req, res) {
    res.sendFile( __dirname + "/" + "index.html" );
})

app.get('/process_get', function (req, res) {

// Chuan bi output trong dinh dang JSON
    response = {
        first_name:req.query.first_name,
        last_name:req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})
var server = app.listen(3000, function () {

    var host = server.address().address
    var port = server.address().port
    // Nếu host là "::" hoặc "0.0.0.0", hiển thị "localhost" thay thế
    if (host === '::' || host === '0.0.0.0') {
        host = 'localhost';
    }
    console.log("Ung dung Node.js dang lang nghe tai dia chi: http://%s:%s", host, port)

})