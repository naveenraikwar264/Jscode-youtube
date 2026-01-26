// There are two ways of declaring objects in JavaScript: using object literals and using the `Object` constructor.
// singleton--non literal way

// Object Non Literal

object.create = function (proto, propertiesObject) {
    if (typeof proto !== 'object' && typeof proto !== 'function' || proto === null) {
        throw new TypeError('Object prototype may only be an Object or null');
    }
    function F() {}
    F.prototype = proto;
    const obj = new F();
    if (propertiesObject !== undefined) {
        Object.defineProperties(obj, propertiesObject);
    }
    return obj;
}

// Object Literal

 
const person1 = {
    name: "Alice",
    age: 30,
    city: "New York"
};

// Using Object Constructor
const person2 = new Object();
person2.name = "Bob";
person2.age = 25;
person2.city = "Los Angeles";

// Accessing object properties
console.log(person1.name); // Output: Alice
console.log(person2['age']); // Output: 25