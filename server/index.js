require('babel-register')({ 
    ignore: /\/(build|node_modules)\//, 
    presets: ['react-app'],
    cache: false 
});

const server = require('./server');

const port = 4000;
server.listen(port, () => {
    console.log('env', process.env.NODE_ENV)
    console.log(`listening on ${port}`);
})