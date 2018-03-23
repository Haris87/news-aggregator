// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const mlab = require('./db');
const Crawler = require('./crawler');
const cors = require('cors');
const cp = require('child_process');

// crawlerProcess.on('message', (m) => {
//   console.log('PARENT got message:', m);
// });
// crawlerProcess.send({ hello: 'world' });

// Get our API routes
const api = require('./routes/api');

const app = express();
app.use(cors());

// connect to database
mlab.connect();

// start crawler as different child_process
const crawlerProcess = cp.fork(`${__dirname}/crawler-process.js`);

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, '../dist')));

// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
