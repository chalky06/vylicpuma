document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("loginForm");
  const message = document.getElementById("message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const input = document.getElementById("password").value.trim();

    if (input === "CAIUS") {
      window.location.href = "puzzles/puzzle1.html";
    } else {
      message.textContent = "Access denied.";
    }

  });

});
