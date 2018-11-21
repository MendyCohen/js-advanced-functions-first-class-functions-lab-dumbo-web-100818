// Code your solution in this file!

const returnFirstTwoDrivers = (function (driver) {
    return driver.slice(0,2)
})

const returnLastTwoDrivers = (function (driver) {
    return driver.slice(driver.length -2)
})

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer) {
  return function(fare) {
    return fare * integer
  }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const fetchSpecifiedDrivers = function (drivers, eitherDriver) {
  return eitherDriver(drivers);
}
