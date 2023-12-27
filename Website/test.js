const cursor = document.querySelector(".circle");

function getDimensions(e) {
    cursor.style.top = `${e.clientY - 25}px`; // -25px for the size of the circle
    cursor.style.left = `${e.clientX - 25}px`;
}

window.addEventListener("mousemove", (e) => {
    getDimensions(e);
});
