// Drop Login
let loginBtn = document.querySelector('.login-btn')
let dropLogin = document.querySelector('.drop-login')

loginBtn.onclick = () => {
    dropLogin.classList.toggle("drop-login-open")
}