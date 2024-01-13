// for of loop

// for (const iterator of object) {
    
// }

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}
const greetings= "hello world!"
for (const greet of greetings) {
    // console.log(greet);
}

//  Maps

const map = new Map()
map.set('IN',"india")
map.set('USA',"United States Of America")
map.set('Fr',"France")
map.set('Fr',"France")

// console.log(map);

for (const [key,value] of map) {
    // console.log(key,':-', value);
}

const myObject={
    game1:'NFS',
   game2: "Spiderman"
}
// for (const [key , value] of myObject) {

//     console.log(key,':-', value);
    
// }  doesn't work on objects