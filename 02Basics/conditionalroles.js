// Create an application with following roles:
// admin -- gets full MediaKeySystemAccess
// subadmin -- gets access to create/delete courses
// testprep -- gets access to create/delete tests
// user -- gets access to consume test

var user = "abc";
switch (user) {
    case "admin":
        console.log("gets full access");
        break;
        case "subadmin":
            console.log("gets access to create/delete courses");
            break;
            case "testprep":
                console.log("gets access to create/delete test");
                break;
            case "user":
                    console.log("gets access to consume test");
                    break;
                default:
                    console.log("Trial user");
}