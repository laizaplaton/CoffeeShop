var email = document.forms['form']['email'];
var password = document.forms['form']['password'];


email.addEventListener('textInput', email_Verify);
password.addEventListener('textInput', pass_Verify);


function validated(){
    if(email.value.length < 9){
        email.style.border = "1px solid red";
        email_error.style.display = "block"
        email.focus();
        return false;
    }
    if(password.value.length < 6){
        password.style.border = "1px solid red";
        pass_error.style.display = "block"
        password.focus();
        return false;
    }
}
function email_Verify(){
    if (email.value.length >= 8){
        email.style.border = "1px solid silver";
        email_error.style.display = "none"
        return true;
    }
}
function pass_Verify(){
    if (password.value.length >= 5){
        password.style.border = "1px solid silver";
        pass_error.style.display = "none"
        return true;
    }
}

function Login(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email == "abc@example.com" && password == "123456"){
        window.location.href = "home.html";
        return true;
    } else {
        attempt++
        if (attempt == 3){
            alert("Cannot Login. Attempts exceeded!");
            document.getElementById("LoginBtn").disable = true;
            document.getElementById("email").disable = true;
            document.getElementById("password").disable = true;
            document.getElementById("email").disable = null;
            document.getElementById("password").disable = null;
            return false;
        } else {
            alert("Incorrect Email or Password.");
            return false;
        }
    }
}

