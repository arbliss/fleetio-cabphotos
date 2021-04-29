//jshint esversion:6

const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => res.send('Inspections route'));

module.exports = router;
