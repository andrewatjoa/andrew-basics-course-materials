var fahrenheitToCelsiusMain = function (input) {
  // Complete the Base: Fahrenheit to Celsius exercise below with fahrenheitToCelsiusMain as the main function.
  var tempInCelcius = convertFahrenheitToCelcius(input);
  var myOutputValue = `${input} degrees Fahrenheit is ${tempInCelcius} degrees Celcius`;
  return myOutputValue;
};

var convertFahrenheitToCelcius = function (tempInFahrenheit) {
  return ((tempInFahrenheit - 32) * 5) / 9;
};

//Base: Road Trip Cost
var convertKmToMiles = function (distanceInKm) {
  var distanceInMiles = distanceInKm * 0.62;
  return distanceInMiles;
};

var calcTotalFuelCost = function (distanceInMiles) {
  var fuelCostPerLitre = 2.2;
  var fuelConsumptionPerMile = 9;

  var totalFuelCost =
    (distanceInMiles / fuelConsumptionPerMile) * fuelCostPerLitre;
  return totalFuelCost;
};

var roadTripCostBaseMain = function (input) {
  // Complete the Base: Road Trip Cost exercise below with roadTripCostBaseMain as the main function.

  var tripLengthInMiles = convertKmToMiles(input);
  var totalFuelCostByCar = calcTotalFuelCost(tripLengthInMiles);

  var myOutputValue = `A road trip of ${input} km will cost a total of $${totalFuelCostByCar}.`;
  return myOutputValue;
};

//Road Trip Cost (Comfortable)

var calcTotalFuelCostForComfortable = function (
  tripLengthInMiles,
  costPerLitreOfFuel
) {
  var fuelConsumption = 9;
  var numLitresOfFuelNeeded = tripLengthInMiles / fuelConsumption;
  var fuelCost = numLitresOfFuelNeeded * costPerLitreOfFuel;
  return fuelCost;
};

var totalFuelCostByTrain = function (tripLengthInKm) {
  var tripLengthInMiles = convertKmToMiles(tripLengthInKm);
  var costPerLitreOfFuelViaTrain = 2;
  var totalCost = calcTotalFuelCostForComfortable(
    tripLengthInMiles,
    costPerLitreOfFuelViaTrain
  );
  return totalCost;
};

var roadTripCostComfortableMain = function (input) {
  // Complete the Comfortable: Road Trip Cost exercise below with roadTripCostComfortableMain as the main function.
  var roadTripLengthInMiles = convertKmToMiles(input);
  var costPerLitreOfFuelViaTrain = 2;
  var costPerLitreOfFuelViaFerrari = 2.2;
  var totalRoadTripCostViaTrain = calcTotalFuelCostForComfortable(
    roadTripLengthInMiles,
    costPerLitreOfFuelViaTrain
  );
  var totalRoadTripCostViaFerrari = calcTotalFuelCostForComfortable(
    roadTripLengthInMiles,
    costPerLitreOfFuelViaFerrari
  );
  var costSavings = totalRoadTripCostViaFerrari - totalRoadTripCostViaTrain;
  var myOutputValue = `You can save $${costSavings.toFixed(
    2
  )} by travelling via train.`;
  return myOutputValue;
};

var convertGramsToPounds = function (grams) {
  return grams * 0.0022;
};

var calcTotalWeightOfIceNeeded = function (totalNumberOfGuests) {
  var drinksPerGuest = 2;
  var iceCubesPerDrink = 4;
  var weightsIceCubesInGrams = 1.5;
  return (
    drinksPerGuest *
    iceCubesPerDrink *
    weightsIceCubesInGrams *
    totalNumberOfGuests
  );
};

var iceMachineMain = function (input) {
  // Complete the More Comfortable: Ice Machine exercise below with iceMachineMain as the main function.
  var totalWeightInGrams = calcTotalWeightOfIceNeeded(input);
  var totalWeightInPounds = convertGramsToPounds(totalWeightInGrams);
  var capacityPerHour = 5;

  var myOutputValue = totalWeightInPounds / capacityPerHour;
  return myOutputValue;
};

//helper functions for beerOrderMain

var beerOrderMain = function (numOfGuests) {
  // Complete the More Comfortable: Beer Order exercise below with beerOrderMain as the main function.

  var numDaysInYear = 365;
  var numQuartersInYear = 4;
  var numDaysInQuarter = numDaysInYear / numQuartersInYear;

  var pintPerGuest = 2;
  var totalNumOfPints = numOfGuests * pintPerGuest * numDaysInQuarter;

  var numPintsInHalfBarrelKeg = 124;
  var totalNumOfHalfBarrelKegs = totalNumOfPints / numPintsInHalfBarrelKeg;

  var myOutputValue = totalNumOfHalfBarrelKegs;
  return myOutputValue;
};

var cellularDataMain = function (input) {
  // Complete the More Comfortable: Cost of Cellular Data exercise below with cellularDataMain as the main function.

  var costPerPlan = 19.99;
  var numOfPlan = Math.ceil(input / 50);
  var totalCost = costPerPlan * numOfPlan;
  var costPerGB = totalCost / input;

  var myOutputValue = costPerGB;
  return myOutputValue;
};
