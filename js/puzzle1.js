const gridSize = 24;
const gridContainer = document.getElementById("grid");
const feedback = document.getElementById("feedback");
const submitBtn = document.getElementById("submitBtn");
const clearBtn = document.getElementById("clearBtn");

let tiles = [];
let isDragging = false;
let drawMode = null;

// ---------------------
// Build Grid
// ---------------------

for (let i = 0; i < gridSize * gridSize; i++) {
    const tile = document.createElement("div");
    tile.classList.add("tile");

    tile.addEventListener("mousedown", () => {
        isDragging = true;

        if (tile.classList.contains("active")) {
            drawMode = "remove";
            tile.classList.remove("active");
        } else {
            drawMode = "add";
            tile.classList.add("active");
        }
    });

    tile.addEventListener("mouseover", () => {
        if (!isDragging) return;

        if (drawMode === "add") {
            tile.classList.add("active");
        } else {
            tile.classList.remove("active");
        }
    });

    gridContainer.appendChild(tile);
    tiles.push(tile);
}

document.addEventListener("mouseup", () => {
    isDragging = false;
    drawMode = null;
});

// ---------------------
// Clear Grid
// ---------------------

clearBtn.addEventListener("click", () => {
    tiles.forEach(tile => tile.classList.remove("active"));
    feedback.textContent = "";
});

// ---------------------
// Pattern Check (2 tolerance)
// ---------------------

function decodePattern(encoded) {
    return atob(encoded);
}

function gridToString() {
    return tiles.map(tile =>
        tile.classList.contains("active") ? "1" : "0"
    ).join("");
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

submitBtn.addEventListener("click", () => {

    const encodedPattern = "PASTE_YOUR_BASE64_PATTERN_HERE";
    const correctString = decodePattern(encodedPattern);

    if (!correctString || correctString.length !== 576) {
        feedback.textContent = "Pattern configuration error.";
        feedback.style.color = "#de1c42";
        return;
    }

    const userString = gridToString();
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
