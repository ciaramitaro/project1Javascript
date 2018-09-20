var getId = function (id) {
    return document.getElementById(id);
};
var user={
    fName:'',
    lName:'',
    dob: '',
    email:'',
    password:'',
    ageInYears:''
};

var displayUser= function () {

    user.fName = getId("fName").value;
    user.lName = getId("lName").value;
    user.dob = getId("dob").value;
    user.email = getId("email").value;
    user.password = getId("email").value;
    user.ageInYears= calcAgeInYears(user.dob);

    getId("display_user").innerHTML = user.fName+ " "+ user.lName+
        ", your age is " + user.ageInYears+ " and your email is "+ user.email;
};
var verifyPassword= function () {
    if(getId("password").value === getId("verifyPassword").value)
    {
       displayUser();
    }
    else{
        alert("Your passwords do not match!");
        getId("password").focus();
    }
};
var calcAgeInYears =function (dob) {
   // var birthday= dob.split('/');
    var birthday= (new Date(dob)).getFullYear();
   var today = (new Date()).getFullYear();
   // var answer=  Number(today) - parseInt(birthday[2], 10);
    var answer=  Number(today) - Number(birthday);
   return answer;
}
var formReset= function(){

    getId("user_form").reset();

};
window.onload = function() {
    getId("submit").onclick = verifyPassword;
    getId("clear").onclick= formReset;
};