console.log("JS IS RUNNING");

const grid = document.getElementById("grid");

for (let i = 0; i < 100; i++) {
    const tile = document.createElement("div");
    tile.style.width = "30px";
    tile.style.height = "30px";
    tile.style.border = "1px solid gold";
    tile.style.display = "inline-block";
    grid.appendChild(tile);
}
