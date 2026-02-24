function checkCode() {
    const input = document.getElementById('userInput').value.toLowerCase();
    const feedback = document.getElementById('feedback');

    // Set your secret password here
    const secretCode = "gargoyles1348";

    if(input === secretCode) {
        feedback.textContent = "✅ Correct! Welcome to the Vylic Puma Files!";
    } else {
        feedback.textContent = "❌ Incorrect. Try again!";
    }
}
