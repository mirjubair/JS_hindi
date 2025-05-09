// const promiseOne = new Promise(function(resolve , reject){
// Do  an async task
//db calls , cryptography , network related
//     setTimeout(function(){
//         console.log("Async task is complete")
//         resolve()
//     },1000)
// });

// consume the promise
// promiseOne.then(function(){
//     console.log("promise consumed");

// })
// anoher way
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "jubair", email: "ujubairulrehman@gmail.com" });
  }, 1000);
});
promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "jubair", password: 123 });
    } else {
      reject("ERROR: something went wrong");
    }
  }, 1000);
});
//chaining
promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("the promise is either resolved or rejected")); // alaways executes

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "javascript", password: 123 });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});

// async await instead of then , catch
// disadvantage is that async wait cant handle errors directly
// async function consumePromiseFive() {
//  try{
//      const response = await promiseFive;
//   console.log(response);
//  }
//  catch(error){
//     console.log(error);
    
//  }
  
// }
// consumePromiseFive()

// async function getAllUsers(){
//   try{
//       const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json() // takes time therefore await
//     console.log(data);
//   }catch(e){
//     console.log(e)
//   }
    
// } 
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);   
})
.catch((error)=> console.log(error));
