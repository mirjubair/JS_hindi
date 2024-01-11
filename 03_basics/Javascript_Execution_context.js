//   JAVACSRIPT EXECUTION CONTEXT

// code{} -->  global execution context GEC
// GEC --> this
// function execution context FEC
// eval execution context

//             PHASES
// code {} --> Memory creation phase
//         --> Execution phase

let val1= 10  // step 1: GLOBAL EXECUTION/ENVIRONMENT --> this
let val2= 5   //step2: Memory phase: val1--> undefined
               // : val2--> undefined
               // : addnum--> definition
              //  : result1,result2=undefined
function addNum(num1, num2){
    let total = num1 + num2
    return total
}
let result1= addNum(val1,val2)
let result2= addNum(10,14)

// step 3 : Execution phase: val1<--10
            //: val2<--5
            // addNum --> { new variable environment
// result1=15                        <--   //  + execution thread
                        
                         //+++ after completion it is deleted
// <-------------- //}
            //  --> { new variable environment
// result2=24                        <--   //  + execution thread
                        
                         //+++ after completion it is deleted
// <-------------- //}
// memory phase          memory phase

// val1 --> undefined     // val1 --> undefined 
// val2 --> undefined     val2 --> undefined
//total --> undefined      //total --> undefined

// Execution context                 execution phase
// num1--> 10                       num1--> 10         
// num2--> 5                        num2--> 14
// total--> 15 -->   returns to GEC    <-- total--> 24

// |       | 
// |       | 
// |       |   // CALL STACKS  LIFO
// |       | 
// |       | 
// |       | 
// |       |  // one ()
// |       |  // two ()
// |       |  // three ()
// |       | 
// |_GEC __|       





