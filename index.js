//jshint esversion:6
const express = require('express');
const app = express();
const ejs = require('ejs');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

// Init middleware
app.use(express.json({ extended: false }));

// Home Route
app.get('/', (req, res) => {
  res.render('index');
});

// Set static public folder
app.use(express.static("public"));

// Define routes
app.use('/vehicles', require('./routes/vehicles'));
app.use('/contacts', require('./routes/contacts'));
app.use('/inspections', require('./routes/inspections'));

// Set View Engine
app.set('view engine', 'ejs');

// Run server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
