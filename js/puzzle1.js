function decodePattern(encoded) {
    return atob(encoded);
}

function gridToString() {
    return tiles.map(t =>
        t.classList.contains("active") ? "1" : "0"
    ).join("");
}

function countMistakes(userStr, correctStr) {
    let mistakes = 0;

    for (let i = 0; i < userStr.length; i++) {
        if (userStr[i] !== correctStr[i]) {
            mistakes++;
            if (mistakes > 2) return mistakes; // early exit
        }
    }

    return mistakes;
}

document.getElementById("submitBtn").addEventListener("click", () => {

    const userString = gridToString();

    const encodedPattern = "d02cad6d46c928da8a67d3c8eea492e1614925eb3259e042f753a2da0640ac05";
    const correctString = decodePattern(encodedPattern);

    const mistakes = countMistakes(userString, correctString);

    if (mistakes <= 2) {
        localStorage.setItem(
            "accessKey",
            btoa("vylic-5822-alien")
        );

        feedback.textContent = "Correct";
        feedback.style.color = "#85b09a";
    } else {
        feedback.textContent = "Incorrect";
        feedback.style.color = "#de1c42";
    }
});
