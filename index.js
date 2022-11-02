const drivers= ['Antonia', 'Nuru', 'Amari', 'Mo']

//Return first two from array
const returnFirstTwoDrivers= (drivers) => drivers.slice(0,2)

//Return last two from array
const returnLastTwoDrivers= (drivers) => drivers.slice(-2)

//Create new list with functions 
const selectingDrivers= [returnFirstTwoDrivers, returnLastTwoDrivers]

//Function in function that multiplies
function createFareMultiplier(){
    const multiplier= (a) => a*a
    return multiplier}

//Double number
const fareDoubler= (Number) => Number+Number

//Triple number
const fareTripler= (Number) => Number*3

//Select different drivers
function selectDifferentDrivers(drivers, selectingDrivers){
    if (selectingDrivers===returnFirstTwoDrivers){
        return drivers.slice(0,2)}
    else if (selectingDrivers===returnLastTwoDrivers){
        return drivers.slice(-2)}
}