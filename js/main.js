// Drop Login
let loginBtn = document.querySelector('.login-btn')
let dropLogin = document.querySelector('.drop-login')

loginBtn.onclick = () => {
    dropLogin.classList.toggle("drop-login-open")
}

// Menu Open Close
let menu = document.querySelector('.menu-icon')
// let navbar = document.querySelector('.navbar')

menu.onclick = () => {
    menu.classList.toggle("move")
}