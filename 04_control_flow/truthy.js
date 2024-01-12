const userEmail = []

if (userEmail) {
    console.log("Got user email");
    
}
else{
    console.log("Don't have user email");
}

// falsy values
/*
  false,0,-0,Bigint 0n,"",null , undefined, NaN 

 TRUTHY VALUES
  
  "0", 'false'," ",[],{}, function (){} 


*/
if (userEmail.length === 0) {
    console.log("Array is empty");
}
const emptyObject= {}
if (Object.keys(emptyObject).length === 0) {
    console.log("Object is empty");
}








