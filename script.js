document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the values entered by the user
    var username = document.getElementById("username").value; true
    var password = document.getElementById("password").value; true

    // Perform actions with the entered data (e.g., validation, API calls, etc.)
    if (username === "barbie" && password === "1234") {
        alert("Welcome, Barbie!");
        // Add here the code to redirect the user to another page after successful login.
        window.location.href = "https://shop.mattel.com/pt-br/pages/barbie";
    } else {
        alert("Invalid username or password. Please try again.");
    }
});

document.getElementById("registerButton").addEventListener("click", function () {
});
