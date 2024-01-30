var storedEmail=localStorage.getItem("email");
var storedPass=localStorage.getItem("password");
var email = document.getElementById("email");
var pass =document.getElementById("password");

function getData(){
 
    email.value=storedEmail;
    pass.value=storedPass;
}
function login(){
    if(email.value != storedEmail || pass.value != storedPass ){
        alert("Unvalid email or password");
        return false;
    }
    else{
        regesterForm.action="../HomePage/project.html";
        
    }

}
