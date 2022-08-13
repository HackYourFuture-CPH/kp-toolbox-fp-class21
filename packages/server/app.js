const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const administrator = require('./admin/routes/index');
const router = require('./api/routes/index');
const admin = require('firebase-admin');
const { authenticate } = require('./firebase/auth');

var serviceAccount = require('./firebase/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const app = express();

//app.use(authenticate);
app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(`/admin/`, authenticate, administrator);
app.use(`/api/`, router);

// Handle every other route with index.html, which will serve the (compiled) React app.
const serveSpa = function (request, response) {
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
};
app.get('*', serveSpa);

module.exports = app;
