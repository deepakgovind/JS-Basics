// Show user a signout button if he is authenticated
// otherwise show him option to login 

var authenticated = true;
// if (authenticated){
//     console.log("Show signout button");
// } else {
//     console.log("Show login option");
// }

authenticated ? console.log("SIGNOUT") : console.log("SIGNIN")