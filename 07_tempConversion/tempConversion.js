const convertToCelsius = function(temp) {
  let celsius = (temp-32)*(5/9)
  return convert = Number(celsius.toFixed(1))
};

const convertToFahrenheit = function(temp) {
  let fahrenheit = ((9/5)*temp)+32
  return convert = Number(fahrenheit.toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
