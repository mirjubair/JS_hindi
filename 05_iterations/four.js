const myObject = {
    js : "javascript",
    cpp :"C++",
    rb : " ruby",
    swift :" swift by apple",
}

for (const key in myObject) {
    // console.log(`${key} ---> ${myObject[key]}`);
}

const programming = ['js','rb','cpp','java']

for (const key in programming) {
    // console.log(programming[key]);
   
}
// const map = new Map()
// map.set('IN',"india")
// map.set('USA',"United States Of America")
// map.set('Fr',"France")
// map.set('Fr',"France")

// for (const key in map) {   
//     console.log(key);
   
// }   doesnt work as map is not iterable
