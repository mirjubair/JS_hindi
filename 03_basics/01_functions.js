function sayMyName(){

    console.log("j");
    console.log("u");
    console.log("b");
    console.log("a");
    console.log("i");
    console.log("r");

}

// sayMyName()
                       // parameters
function addTwoNumbers(number1,number2){
    // console.log(number1 + number2);
    let result = number1 + number2
    return  result

}
              // arguments  
const result = addTwoNumbers(3 ,5)
// console.log(`result : ${result}`);

function loginUserMessage(username = "jubi"){
    // if (!username) {
    //     console.log("please enter a username");
    //     return
    // }
    return `${username} just logged in`

}

// console.log(loginUserMessage("jubair")); 
console.log(loginUserMessage()); 