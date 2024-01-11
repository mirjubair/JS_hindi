// Immediately Invoked Function Expressions (IIFE)
   
( function chai(){
    // named iife
    console.log(`DB connected`);
})();  // here semicolon important

// ()()  to prevent global scope pollution
(  (name) => {
    console.log(`DB2 connected ${name}`);
})(`jubair`)


