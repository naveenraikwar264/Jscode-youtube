const marvel_heros=["spiderman","ironman","thor","hulk","captain america"];
const dc_heros=["superman","batman","flash","aquaman"]
// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[5][1])
// const allheros=marvel_heros.concat(dc_heros);
// console.log(allheros);
const all_new_heros=[...marvel_heros,...dc_heros]
console.log(all_new_heros)
const another_array=[1,2,3,[4,5],6,[7,8,[9,10]]]        
console.log(another_array.flat(2))  //flat method flattens the nested arrays up to the specified depth.     
//In this case, flat(2) flattens the array up to 2 levels deep.
console.log(another_array.flat(Infinity)) 
console.log(Array.isArray(another_array)) //isArray method checks if the given value is an array and returns a boolean value (true or false).
console.log(Array.isArray('naveen'))
console.log(Array.from('Naveen'))
console.log(Array.from({'Naveen': 'Naveen'}))//interesting
console.log(Array.from([1,2,3], x => x * 2)); // [2, 4, 6]
//The second argument is a map function that is applied to each element of the array-like or iterable object before adding it to the new array. In this case, it multiplies each element by 2.          
console.log(marvel_heros.includes('thor')) //includes method checks if a specific element exists in an array and returns a boolean value (true or false).
console.log(dc_heros.includes('joker')) 
let score1=100
let score2=200
let score3=300
const scores=[100,200,300,400,500]
console.log(scores.includes(score2))  
console.log(Array.of(score1,score2,score3)) //of method creates a new array instance with a variable number of arguments passed to it.