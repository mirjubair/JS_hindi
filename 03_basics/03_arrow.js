const user  =  {
    username: "jubair",
    price: 999,

    welcomeMessage: function() {
       console.log(`${this.username} , welcome to website`);
       console.log(this);  // this  --> current context
    }

}

// user.welcomeMessage()
// user.username = "jubair ul rehman"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "jubair"
//     console.log(this.username);  // this doesnt work in functions like it does in objects

// }
// chai()

// const chai = function(){
//     let username = "jubair"
//     console.log(this.username);

// }
// chai()
         // ARROW FUNCTION
const chai = () => {
    let username = "jubair"
    console.log(this);

}
// chai()
    // explicit return : when you use {} then you have to use return
// const addTwo = (num1,num2) => {
//     return num1 + num2
// }
// console.log(addTwo(5,4));
        // implicit return 
// const addTwo = (num1,num2) => num1 + num2
// const addTwo = (num1,num2) => (num1 + num2)

const addTwo = (num1,num2) => ({username:"jubair"})
console.log(addTwo(5,4));

const MyArr = [2,3,4,5,6,8]

// MyArr.forEach(function () {})
// MyArr.forEach(() => ())