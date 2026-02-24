function checkCode() {
    const input = document.getElementById('userInput').value.toLowerCase();
    const feedback = document.getElementById('feedback');

    const secretCode = "gargoyle1348";

    if (input === secretCode) {
        feedback.textContent = "Correct";
        feedback.style.color = "#188d45"; // dark green for correct
        // redirect after a short delay
        setTimeout(function() {
            window.location.href = "puzzles/puzzle1.html";
        }, 500);
    } else {
        feedback.textContent = "Incorrect";
        feedback.style.color = "#de1c42"; // red for incorrect
    }
}
