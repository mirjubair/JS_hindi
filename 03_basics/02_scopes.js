// var c = 300            // GLOBAL SCOPE
let a = 300
if (true) {             
    let a = 10          //  BLOCK
    const b = 20        //  SCOPE
    console.log("INNER: ", a);
                       //
     }

console.log(a);
// console.log(b);
// console.log(c);