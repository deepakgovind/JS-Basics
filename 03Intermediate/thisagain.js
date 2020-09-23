console.log(this);

var user = {
    firstname: "Deepak",
    coursecount: 4,
    getCourseCount: function() {
        console.log("Line 7", this);
    }
}

user.getCourseCount();