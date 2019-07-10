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
    //display modal
    const links = document.querySelectorAll('.work-item__icon');

    links.forEach(function (item) {
        item.addEventListener('click', function (event) {
            ui.showModal(event)
        })
    })
    // hide modal
    document.querySelector('.work-modal__close').addEventListener('click', function () {
        ui.closeModal()
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
// show modal
UI.prototype.showModal = function (event) {
    event.preventDefault();
    if (event.target.parentElement.classList.contains('work-item__icons'));
    let id = event.target.parentElement.dataset.id

    const modal = document.querySelector('.work-modal');
    const modalItem = document.querySelector('.work-modal__item');

    modal.classList.add('work-modal--show');
    modalItem.style.backgroundImage = `url(images/work-${id}.jpg)`
}
// hide modal
UI.prototype.closeModal = function () {
    document.querySelector('.work-modal').classList.remove('work-modal--show')
}