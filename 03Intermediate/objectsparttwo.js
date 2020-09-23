var user = {
    firstname : "Deepak",
    lastname : "Govind",
    logincount : 32,
    Fbloggedin : true,
    courselist : [],

buycourse: function (coursename) {
    this.courselist.push(coursename);
},
getcoursecount : function (){
    return `${this.firstname} is enrolled in total of ${this.courselist.length} courses`
},
};

var courselist = true;
console.log(user.firstname);
console.log(user.getcoursecount());
user.buycourse("React js course");
user.buycourse("Angular course");
console.log(user.getcoursecount());