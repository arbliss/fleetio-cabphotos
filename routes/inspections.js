//jshint esversion:6

const { Router } = require('express');
const router = Router();

const axios = require('axios');

const headers = {
  'Authorization': `Token ${process.env.FLEETIO_API_KEY}`,
  'Account-Token': `${process.env.FLEETIO_ACCOUNT_TOKEN}`
};

let vehiclesArray = [];

axios.all([
  axios.get('https://secure.fleetio.com/api/v1/vehicles?q[vehicle_type_id_eq]=603713&q[s]=name', {headers}),
  axios.get('https://secure.fleetio.com/api/v1/vehicles?q[vehicle_type_id_eq]=604213&q[s]=name', {headers}),
  axios.get('https://secure.fleetio.com/api/v1/vehicles?q[vehicle_type_id_eq]=603712&q[s]=name', {headers})
])
.then(responseArr => {
  //this will be executed only when all requests are complete
  responseArr[0].data.forEach(vehicle => {
    vehiclesArray.push({
      "vehicle_id": vehicle.id,
      "vehicle_name": vehicle.name
    });
  });
  responseArr[1].data.forEach(vehicle => {
    vehiclesArray.push({
      "vehicle_id": vehicle.id,
      "vehicle_name": vehicle.name
    });
  });
  responseArr[2].data.forEach(vehicle => {
    vehiclesArray.push({
      "vehicle_id": vehicle.id,
      "vehicle_name": vehicle.name
    });
  });
}).catch(error => {
  console.log(error);
});

router.get('/', (req, res) => {

  axios.get('https://secure.fleetio.com/api/v1/submitted_inspection_forms', {headers})
  .then(function (response) {

    let inspections = response.data;
    let inspectionCards = [];

    function findVehicleName(inspectionVehicleId) {
      return vehiclesArray.find(v => v.vehicle_id === inspectionVehicleId);
    }

    inspections.forEach(function(inspection) {
      inspection.submitted_inspection_items.forEach(function(inspectionItem) {
        if (inspectionItem.inspection_item.label === "Inside cab photo") {
        inspectionCards.push({
          "date": inspection.date,
          "user": inspection.user,
          "vehicle": findVehicleName(inspection.vehicle_id).vehicle_name,
          "images": inspectionItem.result.full_file_url
          });
        }
      });
    });
    res.render('inspections', {
      inspectionCards: inspectionCards
    });
  }).catch(function (error) {
    console.log(error);
  });
});

module.exports = router;
