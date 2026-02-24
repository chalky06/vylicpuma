const grid = document.getElementById('grid');
const feedback = document.getElementById('feedback');

// Define the “correct pattern” as a set of tile indexes (0-99)
const correctPattern = [0, 1, 2, 11, 22, 33, 44, 55]; // example pattern

// Track user-selected tiles
let activeTiles = new Set();

// Create the 10x10 grid
for (let i = 0; i < 100; i++) {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.dataset.index = i;
    
    tile.addEventListener('click', () => {
        tile.classList.toggle('active');
        if (tile.classList.contains('active')) {
            activeTiles.add(i);
        } else {
            activeTiles.delete(i);
        }
    });

    grid.appendChild(tile);
}

// Check if the pattern matches
document.getElementById('submitBtn').addEventListener('click', () => {
    const userPattern = Array.from(activeTiles).sort((a,b) => a-b);
    const correctSorted = [...correctPattern].sort((a,b) => a-b);

    if (userPattern.length === correctSorted.length &&
        userPattern.every((val, idx) => val === correctSorted[idx])) {
        feedback.textContent = "Correct! You may proceed.";
        feedback.style.color = "#188d45"; // green
    } else {
        feedback.textContent = "Incorrect. Try again.";
        feedback.style.color = "#de1c42"; // red
    }
});
