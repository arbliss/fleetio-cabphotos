# Fleetio API - In Cab Photos
In the current Fleetio Web App there is no easy way to see recent inspections with the in cab photos, all in one place. This solves that issue.

## Screenshots

![Home Page](public/images/home.JPG)

![Contacts Page](public/images/contacts.JPG)

![Vehicles Page](public/images/vehicles.JPG)

![Inspections Page](public/images/inspections.JPG)

## Technologies
* Node.js
* Express
* EJS
* HTML/CSS/Javascript

## Setup
* git clone this repository
* run `npm install` in the command line, from the working directory
* add a .env file with values for the below variables
  FLEETIO_API_KEY=Your API Key
  FLEETIO_ACCOUNT_TOKEN=Your Api Token
* then run `node app.js`

## Code Examples

```Javascript
// Inspections route
router.get('/', (req, res) => {

// API call for submitted inspections
  axios.get('https://secure.fleetio.com/api/v1/submitted_inspection_forms', {headers})
  .then(function (response) {

    let inspections = response.data;
    let inspectionCards = [];

    // Create function for checking vehicle id from inspection against vehicles array
    function findVehicleName(inspectionVehicleId) {
      return vehiclesArray.find(v => v.vehicle_id === inspectionVehicleId);
    }
```

## Features
List of features ready and TODOs for future development
* Can view recent inspection cab photos all at once

To-do list:
* Add functionality to the contacts and vehicles page

## Status
Project is: _in progress_

## Inspiration
Project inspired by continuing improvement

## Contact
Created by https://www.linkedin.com/in/adam-bliss-50951321/ - feel free to contact me!
