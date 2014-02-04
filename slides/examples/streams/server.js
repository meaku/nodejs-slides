var http = require("http"),
    fs = require("fs");

var server = http.createServer().listen(1337);

server.on("request", function (req, res) {
    var writeableStream = fs.createWriteStream(__dirname + "/data.log");

    req.on("end", function () {
        res.end("done");
    });

    req.pipe(writeableStream);
});