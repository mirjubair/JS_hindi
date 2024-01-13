// reduce

// const myNums = [ 1,2,3,4,5]

// const myTotal = myNums.reduce((acc,currval)=>{
//    console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)
// console.log(myTotal);
// const myTotal = myNums.reduce((acc, curr) => acc + curr ,0)
// console.log(myTotal);

const shoppingCart = [
    {
        itemName : "js course",
        price : 2999
    },
    {
        itemName : "java course",
        price : 3999
    },
    {
        itemName : "Data science",
        price : 4999
    },
   
    {
        itemName : "Data science",
        price : 6999
    },
   
]

const newTotal = shoppingCart.reduce((acc, item) => acc + item.price ,0)
console.log(newTotal);