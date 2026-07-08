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
console.log(name, email, password, confirmPassword)

let users = []


function register() {
    if(name.value == "" || email.value == "" || password.value == "" || confirmPassword.value == "" ) {
        console.log("All inputs is required")
        massage.innerHTML = "All inputs is required"
        massage.classList.add("block")
        massage.classList.remove("d-none")
    } else {
        let userInfo = {
            name: name.value,
            email: email.value,
            password: password.value,
            confirmPassword: confirmPassword.value,
        }
        massage.classList.add("d-none")
        users.push(userInfo)
        localStorage.setItem("user", JSON.stringify(users))
        console.log(users)
        location.href = "login.html"
    }
}
