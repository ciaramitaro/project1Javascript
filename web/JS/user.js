var getId = function (id) {
    return document.getElementById(id);
};

var user = {
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

    getId("display_user").innerHTML = user.fName + " " + user.lName +
        ", your age is " + user.ageInYears + " and your email is " + user.email;
};

var verifyPassword = function() {
    var userPassword = getId("password").value;
    var userVerifyPassword = getId("verifyPassword").value;

    if(userPassword === userVerifyPassword && userPassword)
    {
        displayUser();
    }
    else{
        alert("Your passwords do not match or the password field is empty!");
        getId("password").focus();
    }
};

var calcAgeInYears = function(dob) {
    var birthday = new Date(dob);
    var today = new Date();
    var answer =  today - birthday;

    return Math.floor(answer / 31557600000);
};

var formReset = function() {
    getId("user_form").reset();
};

window.onload = function() {
    getId("submit").onclick = verifyPassword;
    getId("clear").onclick= formReset;
};