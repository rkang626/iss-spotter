const { nextISSTimesForMyLocation } = require('./iss-promised');
const { printPassTimes } = require('./printPassTimes');

nextISSTimesForMyLocation()
  .then((passes) => {
    printPassTimes(passes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  })
