const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordCheck = document.getElementById("passwordCheck");

form.addEventListener("submit", function(e){
    e.preventDefault();
    checkInputs();
});

function checkInputs(){

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const passwordCheckValue = passwordCheck.value.trim();

    if(usernameValue === ""){
        setErrorFor(username, "Username cannot be empty");
    }else{
        setSuccessFor(username);
    }

    if(emailValue === ""){
        setErrorFor(email,"Email cannot be empty")
    }else if(!isEmail(emailValue)){
        setErrorFor(email,"Enter a valid email")
    }else {
        setSuccessFor(email);
    }

    if(passwordValue === ""){
        setErrorFor(passwordValue,"Password cannot be empty")
    }else{
        setSuccessFor(password);
    }

    if(passwordCheckValue === ""){
        setErrorFor(passwordCheck,"Password check cannot be empty");
    }else if(passwordValue !== passwordCheckValue){
        setErrorFor(passwordCheck, "Password does not match!");
    }else{
        setSuccessFor(passwordCheck);
    }
}

function setErrorFor(input,message){
    const controlForm = input.parentElement;
    const small = controlForm.querySelector(".error");
    controlForm.className = "control-form fail";
    small.innerText = message;
}

function setSuccessFor(input){
    const controlForm = input.parentElement;
    controlForm.className = "control-form success";
}

function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

}