var password =document.getElementById("password");
var confirmPass =document.getElementById("confpass");
var username = document.getElementById("username");
var email = document.getElementById("e-mail");
function setData(){
    if(password.value!=confirmPass.value){
        alert('Passwords do not match');
        return false;
        }
        else{ 
            localStorage.setItem("username",username.value);
            localStorage.setItem("email",email.value);
            localStorage.setItem("password",password.value);
            console.log(username.value+email.value+password.value); 
            formContainer.action="../login/index.html";
        }
};
 
