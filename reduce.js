/**
 * reduce has an additional param - accumulator
 * returns one value
 * initial value of accumulator is passed in as second argument
 * callback params - acc, iterator, index, arr
 */

 // All countries pop
 let allPop = countries.reduce((accumulator, country) => {
    return accumulator + country.pop;
 }, 0)

 console.log(allPop)


 //add up all nums < 50
 let smallNums = nums.reduce((a, num) => {
    if(num < 50) { a += num }
    return a
 }, 0)
    
 console.log(smallNums)