console.log("javascript")
window.onload = function () {
    var btn = document.getElementById('btn')

    function myfunction() {
        console.log("Hello World");
    };
    if (btn) {
        btn.addEventListener("click", myfunction);
    }
}