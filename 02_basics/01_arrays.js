const myarr=[1,2,3,4,5,6,7,8,9,10];
console.log(myarr);
console.log("Length of the array is:",myarr.length);
console.log("Element at index 3 is:",myarr[3]);
myarr[5]=100;
console.log("Array after updating element at index 5:",myarr);
myarr.push(11);
console.log("Array after pushing 11:",myarr);
myarr.pop();
console.log("Array after popping last element:",myarr);
myarr.shift();
console.log("Array after shifting first element:",myarr);
myarr.unshift(0);
console.log("Array after unshifting 0 at the beginning:",myarr);
console.log("Index of element 7 is:",myarr.indexOf(7));
console.log("Sliced array from index 2 to 5:",myarr.slice(2,6));
myarr.splice(4,2);
console.log("Array after splicing 2 elements from index 4:",myarr);
console.log(myarr.includes(10))
const newarr=myarr.concat([11,12,13]);
console.log("New array after concatenation:",newarr);
const strarr=myarr.join("-");
console.log("Array joined into string with '-':",strarr);
const revarr=myarr.reverse();
console.log("Reversed array:",revarr);
const myn1=myarr.slice(1,3)
console.log("Sliced array from index 1 to 3:",myn1);  
console.log("A",myn1)
const myn2=myarr.splice(1,3)
console.log(myn2)

//Splice modifies the original array by removing or replacing existing elements and/or adding new elements in place.