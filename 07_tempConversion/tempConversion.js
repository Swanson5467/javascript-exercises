const convertToCelsius = function(temp) {
  // subtract 32 and * 5/9
  temp -= 32;
  temp *= 5/9;
  let roundedTemp = Math.round(temp*10)/10;
  return roundedTemp;
};

const convertToFahrenheit = function(temp) {
  // divide by 5/9 and add 32
  temp *= 9/5;
  temp += 32;
  let roundedTemp = Math.round(temp*10)/10;
  return roundedTemp;
};
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
