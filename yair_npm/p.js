// 1. Load _wcc_ Package
const wcc = require('world-countries-capitals')
 
// 2. Use any _wcc_ Method
const randomCountryName = wcc.getRandomCountry()
 
// 3. Play with returned data
console.log(randomCountryName) // Possible output: 'poland'