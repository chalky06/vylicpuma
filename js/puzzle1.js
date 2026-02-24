document.addEventListener("DOMContentLoaded", function () {

    const grid = document.getElementById("grid");
    const submitBtn = document.getElementById("submitBtn");
    const feedback = document.getElementById("feedback");

    // 👇 DEFINE YOUR PATTERN HERE
    const pattern = [
        "1110000000",
        "1010000000",
        "1110000000",
        "0000000000",
        "0000000000",
        "0000000000",
        "0000000000",
        "0000000000",
        "0000000000",
        "0000000000"
    ];

    // Convert pattern into index list
    const correctPattern = [];
    pattern.forEach((row, rowIndex) => {
        row.split("").forEach((cell, colIndex) => {
            if (cell === "1") {
                correctPattern.push(rowIndex * 10 + colIndex);
            }
        });
    });

    // Create grid
    for (let i = 0; i < 100; i++) {
        const tile = document.createElement("div");
        tile.classList.add("tile");
        tile.dataset.index = i;

        tile.addEventListener("click", function () {
            tile.classList.toggle("active");
        });

        grid.appendChild(tile);
    }

    submitBtn.addEventListener("click", function () {

        const tiles = document.querySelectorAll(".tile");
        let correct = true;

        tiles.forEach(tile => {
            const index = parseInt(tile.dataset.index);
            const isActive = tile.classList.contains("active");
            const shouldBeActive = correctPattern.includes(index);

            if (isActive !== shouldBeActive) {
                correct = false;
            }
        });

        if (correct) {
            feedback.textContent = "Correct";
            feedback.style.color = "#188d45";
        } else {
            feedback.textContent = "Incorrect";
            feedback.style.color = "#de1c42";
        }
    });

});
