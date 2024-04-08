// const symbol = Symbol();

// const dogID = Symbol('dog');

// const dog1 = Symbol('dog');
// const dog2 = Symbol('dog');

// console.log(dog1 === dog2); // false

////////////////////////////////////////////

const dogID = Symbol('dog');

// alert(dogID); // Uncaught TypeError: Cannot convert a Symbol value to a string at symbol.js:14:1
// console.log(dogID);

console.log(dogID.description);

let id = Symbol('dogID');

let buddy = {
    [id]: 'Жучка'
}

console.log(buddy[id]);
