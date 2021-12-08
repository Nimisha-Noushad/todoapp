
var loginform=document.getElementById("loginform");
var username= document.getElementById("username");
var password= document.getElementById("password");
var error=document.getElementById("error");

    
function validate(username,password,uservalidate,passwordvalidate){
    var user = uservalidate(username);
    var pwd = passwordvalidate(password);
    
    if (user && pwd){
        error.innerHTML = "";
        window.location.href = "main.html";
        return false;
    } 
    else {
        error.innerHTML = "Username or Password is wrong";
        error.style.color="red";
        return false;
    }

}
function uservalidate(username) {
    if (username == "admin") {
        return true;
    } 
    else {
        return false;
    }
}

function passwordvalidate(password) {
    if (password == "12345") {
        return true;
    } else {
        return false;
    }
}


username.onfocus = function() {
    error.innerHTML = "";
}

password.onfocus = function() {
    error.innerHTML = "";
}


loginform.onsubmit = function() {
    return validate(username.value,password.value,uservalidate,passwordvalidate);
}
// $('#username').on('input',(e)=>{validate('username','admin')});
// $('#password').on('input',(e)=>{validate('password','12345')});