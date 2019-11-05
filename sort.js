/**
 * sort in takes 2 iterators at a time
 * define what is returned with condition
 * return 1 for true, -1 for false
 * sort countries from lowest pop to highest
 */

 const sortedCountries = countries.sort((c1, c2) => {
    return c1.pop > c2.pop ?  1 : -1
 })

 console.log(sortedCountries)

 const alphabetically = countries.sort((c1, c2) => {
     return c1.name > c2.name //Should be .toLowerCase'd since "aa" < "ab" is true but "aa" < "Ab" is false
 })

 console.log(alphabetically)