// Grab the button and the menu container from the page
const menuBtn = document.getElementById('menu-btn');
const menuContainer = document.getElementById('menu-container');

// When the button is clicked, toggle the 'open' class and switch the icon text
menuBtn.addEventListener('click', function() {
    menuContainer.classList.toggle('open');

    // Check if the menu is currently open, then change the symbol accordingly
    if (menuContainer.classList.contains('open')) {
        menuBtn.textContent = '✕';
    } else {
        menuBtn.textContent = '☰';
    }
});