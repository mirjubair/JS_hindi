const userEmail = []

if (userEmail) {
    console.log("Got user email");
    
}
else{
    console.log("Don't have user email");
}

// falsy values
/*
  false,0,-0,Bigint 0n,"",null , undefined, NaN 

 TRUTHY VALUES
  
  "0", 'false'," ",[],{}, function (){} 


*/
// if (userEmail.length === 0) {
//     // console.log("Array is empty");
// }
// const emptyObject= {}
// if (Object.keys(emptyObject).length === 0) {
//     console.log("Object is empty");
// }

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10

// val1 = undefined ?? 15 
val1 = null ?? 10 ?? 15
// console.log(val1);

// TERNARY OPERATOR

// condition ? true statement : false statement

const iceTeaPrice = 100

iceTeaPrice >= 80 ? console.log("less than 80"): console.log("more than 80");;
















