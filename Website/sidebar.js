document.addEventListener('DOMContentLoaded', () => {
    const toggler = document.querySelector('.menu__toggler');
    const menu = document.querySelector('.menu');

    // Removes the active class
    const removeActiveClass = () => {
        toggler.classList.remove('active');
        menu.classList.remove('active');
    };

    // Toggles on and off the 'active' class on the menu
    // and the toggler button.
    toggler.addEventListener('click', (event) => {
        event.stopPropagation(); // Stop propagation to prevent document click listener from firing immediately
        toggler.classList.toggle('active');
        menu.classList.toggle('active');
    });

    // Function to check if the click is outside the menu
    const handleClickOutsideMenu = (event) => {
        if (!menu.contains(event.target)) {
            removeActiveClass();
        }
    };

    document.addEventListener('click', handleClickOutsideMenu);
});