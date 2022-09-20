console.log("javascript")

var btn = document.getElementById('signup')
function myfunction() {

    document.querySelector('.content').classList.add('show');
    document.querySelector('.signup').classList.add('active');
    document.querySelector('.login').classList.remove('passive');
};

btn.addEventListener("click", myfunction);

var cross = document.querySelector('.cross')

function closefunction() {
    document.querySelector('.content').classList.remove('show');
    document.querySelector('.signup').classList.remove('active');

}
cross.addEventListener("click", closefunction);

var loginBtn = document.getElementById('log')

function login() {
    document.querySelector('.content').classList.add('show')
    document.querySelector('.login').classList.add('passive')
    document.querySelector('.signup').classList.remove('active')
}
loginBtn.addEventListener("click", login);

var close = document.querySelector('.close')

function crossfunction() {
    document.querySelector('.content').classList.remove('show')
    document.querySelector('.login').classList.remove('passive');
}
close.addEventListener("click", crossfunction);

