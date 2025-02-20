// var c = 300            // GLOBAL SCOPE
let a = 300
if (true) {             
    let a = 10          //  BLOCK
    const b = 20        //  SCOPE
    // console.log("INNER: ", a);
                       //
     }

// console.log(a);
// console.log(b);
// console.log(c);

function  one(){
    const username ="jubair"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);  // out of its scope

    two()
    
}
// one()
if(true){
    const username = "jubair"
    if(username === "jubair"){
        const website = "youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++ interesting +++++++++++++++++


// console.log(addOne(5)); still ok

function addOne(num){
    return num + 1

}

console.log(addOne(6));

// console.log(addTwo(5));  // error as function is used as an expression (hoisting)

const addTwo = function(num){
    return num + 2
}

console.log(addTwo(5));

