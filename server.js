var express = require('express'),
    app = express(),
    server = require('http').Server(app),
    words = require('./youtube-watch-together-domain-gen/words')

server.listen(5050);

app.use(express.static('.'));
