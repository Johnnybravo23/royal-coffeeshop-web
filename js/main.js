// calling the function
eventListeners();

// creating the function
function eventListeners() {
    // instatiating
    const ui = new UI()
    // window event list
    window.addEventListener('load', function () {
        ui.hidePreloader();
    })
    // nav btn
    document.querySelector('.navBtn').addEventListener('click', function () {
        ui.showNav();
    })
}

// constructor function
function UI() {

}

UI.prototype.hidePreloader = function () {
    document.querySelector('.preloader').style.display = "none";
}
UI.prototype.showNav = function () {
    document.querySelector('.nav').classList.toggle('nav--show')
}