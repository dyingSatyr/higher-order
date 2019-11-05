/**
 * filter arr where car in volvo and audi
 */

 let filteredCars = carManufacturers.filter((manufacturer) => {
    return manufacturer === 'Volvo' | manufacturer === 'Audi' 
 })

 console.log(filteredCars)


 /**
  * get countries with pop between 9 and 12 mills
  */
  let filteredCountries = countries.filter(country => country.pop < 12 && country.pop > 10)
  filteredCountries.forEach(country => console.log(country.name))


/**
 * filter nums > 30
 */
let filteredNums = nums.filter(num => num > 30)
console.log(filteredNums)