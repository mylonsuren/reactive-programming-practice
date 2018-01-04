
var express = require('express');
var app = express(); // declares express app


var port = process.env.PORT || 4000; //sets the port to listen on

app.use(express.static('/node_modules'));
app.use("/node_modules", express.static(__dirname + '/node_modules'));


app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});


//start server
app.listen(port, function() {
	console.log("Now listening on port " + port);
});
