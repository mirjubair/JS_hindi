//  if
const isUserLoggedIn = true
const Temperature = 41
// if (Temperature < 50){

//      console.log("executed");
// }
// else{
// console.log("temperature is greater than 50");
// }
// // <,>,<=,>=,==,===(also checks type),!=   comparison operators

// const score = 200

// if ( score > 100){
//     const power = "fly"
//     console.log(`user power ${power}`);
// }

// const balance = 1000
// implicit scope
// if ( balance > 500)  console.log("test");

// if (balance < 500) {
//     console.log("less than 500");

// }
// else if ( balance < 750){
//     console.log("less than 500");
     
// }
// else if(balance < 900){
//     console.log("less than 900");
// }
// else{
//     console.log("less than 1100");
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn  && debitCard && 2==2){
        console.log("allowed to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail){

    console.log("user logged in");
}