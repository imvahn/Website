// Create the cursor element outside of section-01
const cursor = document.createElement("div");
cursor.classList.add("circle");
document.body.appendChild(cursor);

// Function to update cursor position
function getDimensions(e) {
    cursor.style.top = `${e.clientY - 25}px`; // -25px for the size of the circle
    cursor.style.left = `${e.clientX - 25}px`;
}

// Add mousemove event listener to the entire document
document.addEventListener("mousemove", (e) => {
    getDimensions(e);
});

// Add scroll event listener to update the cursor position
window.addEventListener("scroll", (e) => {
    getDimensions(e);
});