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
// console.log(loginUserMessage()); 
                            // rest operator
function calculateCartPrice(val1,val2,...num1){
    console.log(`${val1} ${val2}`);
    return num1

}

console.log(calculateCartPrice(200,400,500,2000));

const user ={
    username : "jubi",
    price : 199

}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username :"MJ",
    price : 399
})

const myArray = [200,400,300,600]


function returnSecondValue(array){

    return array[1]

}

// console.log(returnSecondValue(myArray));
console.log(returnSecondValue([200,700,500,3000]));
