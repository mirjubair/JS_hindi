const accountId=14456
let accountEmail="jubi@gmail.com"
var accountPassword="12345"
accountCity="jaipur"
let accountState;

// accountId=2   not allowed
accountEmail="hdcg@gmail.com"
accountPassword="122345"
accountCity="Bengaluru"

/*
prefer not to use var because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);