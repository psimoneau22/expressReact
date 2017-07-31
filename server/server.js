const express = require('express');
const path = require('path');
const engines = require('consolidate');
const morgan = require('morgan')
const app = require('./app');
const api = require('./api');
const server = express();

server.engine('js', engines.react);
server.set('views', path.resolve(__dirname, 'views'));
server.set('view engine', 'js');

server.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));
server.use(express.static(path.resolve(__dirname, '../', 'build'), {
    index: false }));
server.use('/api', api);
server.use('/', app);

module.exports = server;