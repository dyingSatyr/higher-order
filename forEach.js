/**
 * forEach through array of strings
 */ 
carManufacturers.forEach(manufacturer => console.log(manufacturer))


/**
 * forEach through arr of objects
 */
let lowestPop = Infinity
countries.forEach(country => {
    if (lowestPop > country.pop) {
        lowestPop = country.pop
    }
})
console.log(`Lowest pop country has ${lowestPop} inhabitants.`)

/**
 * forEach can take 3 args iterator, index, full array
 */
countries.forEach((country, index, arr) => {
    if (country.name === 'Switzerland') {
        console.log(`Index of Switzerland in countries array is ${index}, and its pop is ${arr[index].pop} or ${country.pop}`)
    }
})

/**
 * forEach add an id to each object by index
 */
countries.forEach((country, index) => {
    country.id = index
})
console.log(countries)

/**
 * with ternary operator
 */
countries.forEach(country => country.name === 'Serbia' ? console.log(country.pop) : console.log(`This ain't Serbia`))