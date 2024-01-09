// const tinderUser = new Object() // singleton obj
const tinderUser = {}     // non singleton obj

tinderUser.id = "12234abc"
tinderUser.name = "Jubair"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email :"some@gmail.com",
    fullname :{
        userfullname:{
            firstname:"jubair",
            lastname :"mir"
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname?.userfullname.firstname);
// '?' is for safety that if there is no full name then carry on

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj4 = {5:"a", 6:"b"}

// const obj3= {obj1,obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)
// {} is optional parameter but recommended
//Spread operator
const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);

const users = [
    {
        id:1,
        email:"j@gmail.com"
    },
    {
        id:2,
        email:"u@gmail.com"
    },
    {
        id:3,
        email:"b@gmail.com"
    },
    {
        id:4,
        email:"air@gmail.com"
    },
]

users[1].email
console.log(tinderUser)
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'))


