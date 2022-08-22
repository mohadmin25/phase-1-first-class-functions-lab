// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
    //we are using the slice method to return the 1st 2 names of the driver which is ['Antonia', 'Nuru', 'Amari', 'Mo'];
    return drivers.slice(0,2)
}

const returnLastTwoDrivers = function (drivers){
    // we are returning the last 2 names of the drivers whic is ['Antonia', 'Nuru', 'Amari', 'Mo'];
    return drivers.slice(-2)
}
 
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers] // we are passimg the 2 functions as an array 
 
const createFareMultiplier = function (multiplier){
    return function(valueMultiplier){
        return multiplier * valueMultiplier // we are * 2 arguments from 2 functions 1 from the outer function and 1 from the inner function
    }
}

const fareDoubler = createFareMultiplier(2) // 2 is lone argument passed inside the function createfaremultiplier 
createFareMultiplier()

const fareTripler = createFareMultiplier(3)

const  selectDifferentDrivers = function(drivers, eitherFirstOrLast){
    return eitherFirstOrLast(drivers)
}
