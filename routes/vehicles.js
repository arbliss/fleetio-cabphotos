//jshint esversion:6

const { Router } = require('express');
const router = Router();
const axios = require('axios');

router.get('/', (req, res) => {
  axios({
  method: 'get',
  url: 'https://secure.fleetio.com/api/v1/vehicles',
  headers: {
    'Authorization': `Token ${process.env.FLEETIO_API_KEY}`,
    'Account-Token': `${process.env.FLEETIO_ACCOUNT_TOKEN}`
  }
  }).then(function (response) {
    res.send(response.data);
  }).catch(function (error) {
    console.log(error);
  });
});

module.exports = router;
