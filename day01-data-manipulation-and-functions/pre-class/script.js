//helper functions

var kilometersToMiles = function (distanceInKilometers) {
  console.log("running km to miles function");
  var distanceInMiles = distanceInKilometers * 0.62;
  return distanceInMiles;
};

var main = function (input) {
  var myOutputValue = kilometersToMiles(input);
  return myOutputValue;
};

var greetingMain = function (input) {
  // Attempt the Greeting Program exercise from the Our First Program module below with greetingMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var metricMain = function (input) {
  // Attempt the Metric Conversion Program exercise from the Our First Program module below with metricMain as the main function.
  var myOutputValue = convertKmToMiles(input);
  return myOutputValue;
};

var functionsExampleMain = function (input) {
  // Attempt the Base: Run Example Code exercise from the Functions I module below with functionsExampleMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var trainSpeedMain = function (input) {
  // Attempt the Comfortable: Train Speed exercise from the Functions I module below with trainSpeedMain as the main function.
  var trainTwoSpeed = calcTrainTwoSpeed(input);
  var myOutputValue = `Given a ${input} min delay, train 2 needs to travel at a speed of ${trainTwoSpeed.toFixed(
    0
  )} kph`;
  return myOutputValue;
};
//helper functions
var convertMinsToHrs = function (mins) {
  return mins / 60;
};

var calcDistance = function (speed, time) {
  return speed * time;
};

var calcTrainTwoSpeed = function (delayInMins) {
  var trainOneSpeed = 200;
  var timeToTokyoTrainOne = 2;
  var distanceToTokyo = calcDistance(trainOneSpeed, timeToTokyoTrainOne);

  var remainingTimeForTravel =
    timeToTokyoTrainOne - convertMinsToHrs(delayInMins);
  return distanceToTokyo / remainingTimeForTravel;
};

var clockMain = function (input) {
  // Attempt the More Comfortable: Clock exercise from the Functions I module below with clockMain as the main function.
  var clockangle = calcClockAngle(input);
  var myOutputValue = `The angle between the hour and minute hand is ${clockangle} degrees`;
  return myOutputValue;
};
