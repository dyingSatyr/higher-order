/**
 * some returns bool 
 * true if at least one element passes the test
 * breaks loop on positive result
 * empty array always returns false
 */


 // check if bmw in carmmanufacturers
 const isThereBMW = carManufacturers.some(manufacturer => manufacturer === 'BMW')
 console.log(isThereBMW)


 //check if some countries have more than 10 mil pop
 console.log('Some countries have more than 10m pop: ' + countries.some(country => country.pop > 10))

 //check if at least one num is odd]
 console.log('Some nums are odd: ' + nums.some(num => num % 2 === 1))