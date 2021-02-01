function changeHeading()
{
    document.getElementById("heading").style.visibility="visible";
}

function changeSVG()
{
    document.querySelector("svg").style.visibility="visible";
}
var i = 0;

function changeBG() {

    if (i == 3) {
        i = 0;
    }
    let color_arr = ["rebeccapurple", "#5eaaa8", "#c7956d"];
    document.body.style.backgroundColor = color_arr[i++];
}

setInterval(changeHeading, 2000);
setInterval(changeSVG, 2000);
setInterval(changeBG, 4000);


function loginClick() {
    if (document.querySelector(".login").onclick) {
        document.getElementById("login").style.backgroundColor="rgba(0, 0, 0, 0.3)";
        document.getElementById("register_portal").style.backgroundColor="transparent";
        document.getElementById("secondary_input").style.visibility="hidden";
        document.getElementById("container").style.visibility="visible";
        document.getElementById("container").style.animation="portal 2s";
    }
}

function registerClick() {
    if (document.querySelector(".register_portal").onclick) {
        // alert("true");
        document.getElementById("register_portal").style.backgroundColor="rgba(0, 0, 0, 0.3)";
        document.getElementById("login").style.backgroundColor="transparent";
        document.getElementById("secondary_input").style.visibility="visible";
        document.getElementById("secondary_input").style.animation="portal 2s";
        document.getElementById("container").style.visibility="hidden";
    }
}

// function registerButton()
// {
//     if (document.getElementById("register").value)
//     {
//         if (document.getElementById("register").value.substring(0, 4) == "7140" && document.getElementById("register").value.length == 12) {
//             document.getElementById("secondary_input").style.visibility = "visible";
//             document.getElementById("container-reg").style.visibility = "hidden";
//         }

//         else {
//             document.getElementById("tooltip").innerHTML = "Enter Valid Register Number";
//         }
//     }

//     else {
//         document.getElementById("tooltip").innerHTML = "Enter Valid Register Number";
//     }
// }

function registerButton1()
{
    var name = document.myform.name1.value;
    var email = document.myform.email.value;
    var pwd = document.myform.password.value;
    var conf_pass = document.myform.conf_password.value;
    var pattern = "^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+(\.[a-zA-Z]{2,6})+$";
    var emailCount = 0, nameCount = 0, pwdCount = 0, conf_pwdCount = 0;

    if (document.getElementById("register").value)
    {
        if (document.getElementById("register").value.substring(0, 4) == "7140" && document.getElementById("register").value.length == 12) {
            document.getElementById("secondary_input").style.visibility = "visible";
            document.getElementById("container-reg").style.visibility = "hidden";
        }

        else {
            document.getElementById("tooltip").innerHTML = "Enter Valid Register Number";
        }
    }

    else {
        document.getElementById("tooltip").innerHTML = "Enter Valid Register Number";
    }

    if (name.length == 0)
    {
        document.getElementById("tooltip1").innerText="Enter Name";
        return false;
    }

    else {
        document.getElementById("tooltip1").innerText="";
        nameCount = 1;
    }

    if(email.length === 0) {
        document.getElementById("tooltip2").innerText="Enter Email";
        return false;
    }

    else {
        if (email.match(pattern))
        {
            document.getElementById("tooltip2").innerText="";
            emailCount = 1;
        }

        else {
            document.getElementById("tooltip2").innerText="Enter Valid Email";
            return false;
        }
    }

    if (pwd.length == 0)
    {
        document.getElementById("tooltip3").innerText="Enter Password";
        return false;
    }

    else {
        if (pwd.length >= 8) {
            document.getElementById("tooltip3").innerText="";
            pwdCount = 1;
        }

        else {
            document.getElementById("tooltip3").innerText="Password must contain minimum of 8 characters";
            return false;
        }
    }

    if (conf_pass.length == 0)
    {
        document.getElementById("tooltip4").innerText="Enter Confirm Password";
        return false;
    }

    else {
        if (pwd == conf_pass) {
            document.getElementById("tooltip4").innerText="";
            conf_pwdCount = 1;
            window.location.href="https://www.google.com/";
        }

        else {
            document.getElementById("tooltip4").innerText="Password and Confirm Password does not match";
            return false;
        }
    }
}

function loginButton()
{
    let user = false;
    let pass = false;
    if (!document.getElementById("username").value)
    {
        document.getElementById("username_tooltip").innerHTML="Enter Email";
    }

    else if (document.getElementById("username").value)
    {
        let str = "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/";
        if (regex1.test(document.getElementById("username").value))
        {
            document.getElementById("username_tooltip").innerHTML="";
            user = true;
        }

        else {
            document.getElementById("username_tooltip").innerHTML="Enter Valid Email";
        }
    }

    if (!document.getElementById("password").value)
    {
        document.getElementById("password_tooltip").innerHTML="Enter Password";
    }

    else if (!document.getElementById("password").value)
    {
        if (document.getElementById("password").value == "admin") {
            document.getElementById("password_tooltip").innerHTML = "";
            pass = true;
        }

        else {
            document.getElementById("password_tooltip").innerHTML = "Enter Valid Password";
        }
    }

    if (document.getElementById("username").value == "admin@gmail.com" && document.getElementById("password").value == "admin")
    {
        document.getElementById("username_tooltip").innerHTML="";
        document.getElementById("password_tooltip").innerHTML = "";
        window.location.href="https://www.google.com/";
    }
}
