function checkCode() {
    const input = document.getElementById('userInput').value.toLowerCase();
    const feedback = document.getElementById('feedback');

    const secretCode = "gargoyle1348";

    if(input === secretCode) {
        // Redirect to Puzzle 1
        window.location.href = "puzzles/puzzle1.html";
    } else {
        feedback.textContent = "❌ Incorrect. Try again!";
    }
}
