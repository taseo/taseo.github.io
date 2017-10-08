// hasClass function checks if element has class that was passed to it

function hasClass(element, className) {
    return element.className && new RegExp('(\\s|^)' + className + '(\\s|$)').test(element.className);
}

// Variable declrations

var menu = document.querySelector('#menu');
var main = document.querySelector('main');
var drawer = document.querySelector('#drawer');

var barsButton = 'fa fa-bars';
var closeButton = 'fa fa-times';

menu.addEventListener('click', function(e) {

    if (hasClass(menu, barsButton)) {
        drawer.classList.toggle('open');
        e.stopPropagation();
        menu.className = closeButton;
    } else if (hasClass(menu, closeButton)) {
        drawer.classList.remove('open');
        e.stopPropagation();
        menu.className = barsButton;
    }
});

main.addEventListener('click', function() {
    drawer.classList.remove('open');
    menu.className = barsButton;
});
