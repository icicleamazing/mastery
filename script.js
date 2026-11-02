const menuBtn = document.getElementById('menu-btn');
const menuContainer = document.getElementById('menu-container');

menuBtn.addEventListener('click', function() {
    menuContainer.classList.toggle('open');

    if (menuContainer.classList.contains('open')) {
        menuBtn.textContent = '✕';
    } else {
        menuBtn.textContent = '☰';
    }
});
