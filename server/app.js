const path = require('path');
const parser = require('cookie-parser');
const express = require('express');
const router = require('./router/router')

const app = express();
app.use(parser());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'..', 'public')));
app.use(router)

module.exports = app;
