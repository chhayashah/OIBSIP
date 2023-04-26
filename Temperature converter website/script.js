function convertCelsiusToFahrenheit() {
  const celsiusInput = document.getElementById("celsius-input");
  const celsiusValue = parseFloat(celsiusInput.value);
  if (isNaN(celsiusValue)) {
    alert("Please enter a valid number for Celsius!");
    return;
  }
  const fahrenheitValue = (celsiusValue * 9/5) + 32;
  const resultElement = document.getElementById("celsius-to-fahrenheit-result");
  resultElement.textContent = `${celsiusValue} Celsius is equal to ${fahrenheitValue.toFixed(2)} Fahrenheit.`;
}

function convertFahrenheitToCelsius() {
  const fahrenheitInput = document.getElementById("fahrenheit-input");
  const fahrenheitValue = parseFloat(fahrenheitInput.value);
  if (isNaN(fahrenheitValue)) {
    alert("Please enter a valid number for Fahrenheit!");
    return;
  }
  const celsiusValue = (fahrenheitValue - 32) * 5/9;
  const resultElement = document.getElementById("fahrenheit-to-celsius-result");
  resultElement.textContent = `${fahrenheitValue} Fahrenheit is equal to ${celsiusValue.toFixed(2)} Celsius.`;
}