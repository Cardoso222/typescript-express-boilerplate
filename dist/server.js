"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
var app = express();
app.get('/ping', function (req, res) {
    res.send('pong');
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
