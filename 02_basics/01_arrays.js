//    Array

// const myArr = [0,1,2,34,5,6,"jubair"]
const myArr = [0,1,2,34,5,6]

// console.log(myArr[0]);
// console.log(myArr[2]);

// const myHeros = ["superman","ironman","winter soldier"]
// const myArr2 = new Array(1,2,3,4,5)
// console.log(myArr2[0]);

// Array Methods

// myArr.push(6)  // inserts at end
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)  // inserts at begining
// myArr.shift()  // deletes at begining

// console.log(myArr.includes(5));
// console.log(myArr.indexOf(9));

// const newArr = myArr.join("-")
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

// slice , splice

console.log("A ",myArr);

const myn1= myArr.slice(1,3) // doesnt affect the original array and doeant include range
console.log(myn1);
console.log("B", myArr);

const myn2= myArr.splice(1,3) // includes range and does change the original array
console.log("C", myArr);
console.log(myn2);


