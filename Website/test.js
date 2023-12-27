ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400
});

ScrollReveal().reveal('.section-title', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.info-title', { delay: 600, origin: 'left', interval: 200 });
ScrollReveal().reveal('.info', { delay: 700, origin: 'bottom', interval: 200 });