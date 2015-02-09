var express = require('express'),
    app = express(),
    server = require('http').Server(app),
    apply_call = require('./modules/apply-call')
    // words = require('./youtube-watch-together-domain-gen/words')
    // genDomain = require('./youtube-watch-together-domain-gen/genDomain')

server.listen(5050);

app.use(express.static('.'));
