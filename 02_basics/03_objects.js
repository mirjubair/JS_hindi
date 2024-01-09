// singleton  -- using constructor
// object.create

// object literals

const mySym = Symbol("key1")

const Juser = {
    name: "jubair",
    "full name" : "Mir Jubair",
    [mySym] : "my key1",
    age : 21,
    location : "kashmir",
    email : "jubair@gmail.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday","Saturday"]
}
// console.log(Juser.email);  // cant use when key is given in " "
// console.log(Juser.full name);  // cant use when key is given in " "
// console.log(Juser["email"]);
// console.log(Juser["full name"]);
// console.log(Juser[mySym]);

Juser.email="jubi@chatgpt.com"
// Object.freeze(Juser)  // lock
Juser.email= "jubai2331r@gmail.com"
// console.log(Juser)

Juser.greeting = function(){
    console.log("Hello JS user");
}
Juser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(Juser.greeting());
console.log(Juser.greetingTwo());
// console.log(Juser.greeting);