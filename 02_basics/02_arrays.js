const marvel_heros=["spiderman","ironman","thor","hulk","captain america"];
const dc_heros=["superman","batman","flash","aquaman"]
// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[5][1])
// const allheros=marvel_heros.concat(dc_heros);
// console.log(allheros);
const all_new_heros=[...marvel_heros,...dc_heros]
console.log(all_new_heros)
