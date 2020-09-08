//want to put in a string, return the return.
module.exports = (inputString) => {
    numberString = inputString.match(/[0-9./]+/)[0];
    unitString = inputString.match(/[a-zL]+/)[0];
    const LperGal = 3.78541;
    const kgperLb = 0.453592;
    const kmperMi = 1.60934;
    validUnits = {
        "gal":{
        "returnUnit": "L",
        "conversionFactor": LperGal,
        "ext" : "gallons"},
        "L": {
        "returnUnit": "gal",
        "conversionFactor": (1/LperGal),
        "ext" : "liters"},
        "lbs": {
        "returnUnit": "kg",
        "conversionFactor": kgperLb,
        "ext": "pounds"},
        "kg": {
        "returnUnit": "lbs",
        "conversionFactor": (1/kgperLb),
        "ext" : "kilograms"},
        "mi": {
        "returnUnit": "km",
        "conversionFactor": kmperMi,
        "ext": "miles"},
        "km": {
            "returnUnit": "km",
            "conversionFactor": (1/kmperMi),
            "ext": "kilometers"}
        };
    
    let numVal = 1;
    console.log(numVal);
    if(!numberString){
        numVal = 1;
    } else{
        numVal = eval(numberString).toFixed(5);
    }
    returnObj = {};
    if(!validUnits.hasOwnProperty(unitString)){
        return "invalid unit";
    } else{
        returnObj["initNum"] = numberString;
        returnObj["initUnit"] = unitString;
        returnObj["returnNum"] =
        (numVal*validUnits[unitString]["conversionFactor"])
        .toFixed(5);
        returnObj["returnUnit"] =
        validUnits[unitString]["returnUnit"];
        returnObj["string"] =numVal + " " +
        validUnits[unitString]["ext"] + " converts to "
        + returnObj["returnNum"] +" " + validUnits[
            validUnits[unitString]["returnUnit"]]["ext"];
        return returnObj;
    }
}