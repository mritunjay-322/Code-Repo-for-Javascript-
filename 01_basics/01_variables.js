const accountId = 14523
let accountEmail = "mritunjay@google.com"
var accountPassword = "12345678"
accountCity = "Jaipur"
let accountState;
// accountId = 13451 // not allowed
/*
Prefer not to use var 
because of issue in block scope and functional scope ..
*/

accountEmail = "mri@google.com"
accountPassword = "12381678"
accountCity = "Kolkata"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
