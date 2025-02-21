// Create cursor element
const cursor = document.createElement("div");
cursor.classList.add("custom-cursor");
document.body.appendChild(cursor);

// Track cursor movement
document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;

    // Create a trail effect
    const trail = document.createElement("div");
    trail.classList.add("cursor-trail");
    trail.style.left = `${e.clientX}px`;
    trail.style.top = `${e.clientY}px`;
    document.body.appendChild(trail);

    // Remove trail after animation ends
    setTimeout(() => {
        trail.remove();
    }, 500);
});

// Ensure cursor is visible everywhere, including on buttons
document.querySelectorAll("button, a").forEach((element) => {
    element.addEventListener("mouseenter", () => {
        cursor.style.display = "none"; // Hide custom cursor over buttons
    });
    element.addEventListener("mouseleave", () => {
        cursor.style.display = "block"; // Show custom cursor when leaving buttons
    });
});
