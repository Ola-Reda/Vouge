// async function getData() {
//     let response = await fetch("https://api.escuelajs.co/api/v1/products")
//     console.log(response)
//     let data = await response.json()
//     console.log(data)
// }

// getData()
const name = document.getElementById("inputName")
const email = document.getElementById("inputEmail")
const password = document.getElementById("inputPassword")
const confirmPassword = document.getElementById("inputConfirmPassword")
const massage = document.getElementById("massage")
let users = []

if(JSON.parse(localStorage.getItem("userinfo")) != null) {
    users = JSON.parse(localStorage.getItem("userinfo"))
}


//register function
function register() {
    if(name.value == "" || email.value == "" || password.value == "" || confirmPassword.value == "" ) {
        massage.innerHTML = "All inputs is required"
        massage.classList.add("block")
        massage.classList.remove("d-none")
    } else {
        //check if email already exist
        for(let i =0; i < users.length; i++) {
            if (email.value == users[i].email) {
                massage.innerHTML = "Email already exists"
                massage.classList.add("block")
                massage.classList.remove("d-none")
                return false
            }
        }
        if (!emailVailation()) {
            massage.innerHTML = "Invalid email";
            massage.classList.add("block");
            massage.classList.remove("d-none");
            return;
        }
        if (password.value != confirmPassword.value) {
            massage.innerHTML = "password not match";
            massage.classList.add("block");
            massage.classList.remove("d-none");
            return;
        }
        let userInfo = {
            name: name.value,
            email: email.value,
            password: password.value,
            confirmPassword: confirmPassword.value,
        }
        massage.classList.add("d-none")
        users.push(userInfo)
        localStorage.setItem("userinfo", JSON.stringify(users))
        console.log(users)
        location.href = "login.html"
    }
}


//login function
function login() {
    if(email.value == "" || password.value == ""){
        massage.innerHTML = "All inputs is required"
        massage.classList.add("block")
        massage.classList.remove("d-none")
    }
    else{
        for(let i = 0; i < users.length; i++) {
            if(email.value != users[i].email && password.value != users[i].password) {
                massage.innerHTML = "incorrect email or password"
                massage.classList.add("block")
                massage.classList.remove("d-none")
            }else {
                location.href = "index.html"
            }
        }
    }
}


//vaildation function
function emailVailation() {
    var regax = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    myEmail = email.value
    if(regax.test(myEmail)){
        email.classList.add("is-valid")
        email.classList.remove("is-invalid")
        return true
    }else {
        email.classList.remove("is-valid")
        email.classList.add("is-invalid")
        return false
    }
}

