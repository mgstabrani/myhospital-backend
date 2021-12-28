require('dotenv').config();

const express = require('express');
const http = require('http');

const app = express();
const cors = require('cors');
const routes = require('./src/server');
const db = require('./src/server/database/mysql');

const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'DELETE', 'PUT'],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

db.sync();
routes(app, express);

const PORT = process.env.PORT || 3000;
const httpServer = http.createServer(app);
// eslint-disable-next-line no-console
console.log(`server listening on port: ${PORT}`);
httpServer.listen(PORT);
