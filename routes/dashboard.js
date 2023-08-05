const express = require('express');
const router = express.Router();
const validUrl = require('valid-url');
const shortid = require('shortid');
const QRCode = require('qrcode');
const URL = require('../models/url');

router.get('/', (req, res) => {
  if (req.session.userId) {
    res.render('dashboard');
  } else {
    res.redirect('/login');
  }
});





router.get('/new', (req, res) => {
  res.render('new')
});


module.exports = router;