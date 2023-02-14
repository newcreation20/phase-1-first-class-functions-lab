// Code your solution in this file!
function returnFirstTwoDrivers(drivers) {
    return [drivers[0], drivers[1]]
}

function returnLastTwoDrivers(drivers) {
    return [drivers[2], drivers[3]]
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiply) {
    return function fareMultiplier(){
        return multiply * multiply
    }
}
    
function fareDoubler(multiply) {
    return multiply * 2
}

function fareTripler(multiply){
    return multiply * 3
}

function selectDifferentDrivers(drivers, functionName){
    return functionName(drivers)
}