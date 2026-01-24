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
