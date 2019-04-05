const http = require('http');
const chalk = require('chalk');

const app = require('./app');

const port = process.env.PORT || 5000;
const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Listening on port ${chalk.green(port)}`);
});