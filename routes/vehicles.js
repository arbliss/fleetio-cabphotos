//jshint esversion:6

const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => res.send('Vehicles route'));

module.exports = router;
