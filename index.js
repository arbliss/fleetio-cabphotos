//jshint esversion:6
const express = require('express');
const app = express();
const axios = require('axios');
require("dotenv").config();

const PORT = process.env.PORT || 3000;

// init middleware
app.use(express.json({ extended: false }));

// Home Route
app.get('/', (req, res) => res.send('Home route'));

// Define Routes
app.use('/vehicles', require('./routes/vehicles'));
app.use('/contacts', require('./routes/contacts'));
app.use('/inspections', require('./routes/inspections'));

//run server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
