// for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is the best number")
    }
    //  console.log(element)

}

// console.log(element);  out of scope

for (let i = 0; i <= 5; i++) {
    console.log(`outer loop value : ${i}`);
    for (let j = 0; j <= 5; j++) {
        console.log(`inner loop value : ${j} and inner loop ${i}`);
    }


}