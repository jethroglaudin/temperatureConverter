 const celciusInput = document.querySelector('#celcius >input');
 const fahrenheitInput = document.querySelector('#fahrenheit >input');
 const kelvinInput = document.querySelector('#kelvin >input');

 function roundNum(num) {
   return Math.round(num * 100) / 100;
 }
 function celciusToFahrenheigtAndKelvin() {
   const celciusTemp = parseFloat(celciusInput.value);
   const fahrenheitTemp = (celciusTemp * (9 / 5)) + 32;
   const kelvinTemp = celciusTemp + 273.15;
   fahrenheitInput.value = roundNum(fahrenheitTemp);
   kelvinInput.value = roundNum(kelvinTemp);
 };

 function fahrenheigtToCelciusAndKelvin() {
   const fahrenheitTemp = parseFloat(fahrenheitInput.value);
   const celciusTemp = (fahrenheitTemp - 32) * (5 / 9);
   const kelvinTemp = (fahrenheitTemp + 459.67) * 5 / 9;
   celciusInput.value = roundNum(celciusTemp);
   kelvinInput.value = roundNum(kelvinTemp);
 }

 function kelvinToFahrenheitAndCelcius() {
   const kelvinTemp = parseFloat(kelvinInput.value);
   const fahrenheitTemp = 9 / 5 * (kelvinTemp - 273) + 32
   const celciusTemp = kelvinTemp - 273.15
   fahrenheitInput.value = roundNum(fahrenheitTemp);
   celciusInput.value = roundNum(celciusTemp);
 }

 function main() {
   celciusInput.addEventListener('input', celciusToFahrenheigtAndKelvin);
   fahrenheitInput.addEventListener('input', fahrenheigtToCelciusAndKelvin)
   kelvinInput.addEventListener('input', kelvinToFahrenheitAndCelcius)

 };

 main();
