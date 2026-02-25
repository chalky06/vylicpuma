const gridSize = 24;
const gridContainer = document.getElementById("grid");
const feedback = document.getElementById("feedback");
let tiles = [];
let isDragging = false;

// --- 1. Create the grid ---
for (let r = 0; r < gridSize; r++) {
    for (let c = 0; c < gridSize; c++) {
        const tile = document.createElement("div");
        tile.classList.add("tile");

        // Toggle on click
        tile.addEventListener("click", () => {
            tile.classList.toggle("active");
        });

        // Drag drawing
        tile.addEventListener("mousedown", () => { isDragging = true; tile.classList.add("active"); });
        tile.addEventListener("mouseover", () => { if (isDragging) tile.classList.add("active"); });
        tile.addEventListener("mouseup", () => { isDragging = false; });

        // For touch devices
        tile.addEventListener("touchstart", e => { e.preventDefault(); tile.classList.add("active"); });
        tile.addEventListener("touchmove", e => {
            e.preventDefault();
            const touch = e.touches[0];
            const el = document.elementFromPoint(touch.clientX, touch.clientY);
            if (el && el.classList.contains("tile")) el.classList.add("active");
        });

        gridContainer.appendChild(tile);
        tiles.push(tile);
    }
}

// Stop dragging if mouse leaves the grid
document.addEventListener("mouseup", () => { isDragging = false; });

// --- 2. Pattern logic ---
function decodePattern(encoded) {
    return atob(encoded);
}

function gridToString() {
    return tiles.map(t => t.classList.contains("active") ? "1" : "0").join("");
}

function countMistakes(userStr, correctStr) {
    let mistakes = 0;
    for (let i = 0; i < userStr.length; i++) {
        if (userStr[i] !== correctStr[i]) {
            mistakes++;
            if (mistakes > 2) return mistakes;
        }
    }
    return mistakes;
}

// --- 3. Submit button ---
document.getElementById("submitBtn").addEventListener("click", () => {
    const userString = gridToString();

    const encodedPattern = "d02cad6d46c928da8a67d3c8eea492e1614925eb3259e042f753a2da0640ac05"; // Base64 24x24 pattern
    const correctString = decodePattern(encodedPattern);

    const mistakes = countMistakes(userString, correctString);

    if (mistakes <= 2) {
        localStorage.setItem("accessKey", btoa("vylic-5822-alien"));
        feedback.textContent = "Correct";
        feedback.style.color = "#85b09a";
    } else {
        feedback.textContent = "Incorrect";
        feedback.style.color = "#de1c42";
    }
});
