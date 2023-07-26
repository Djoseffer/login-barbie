document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); 

    
    var username = document.getElementById("username").value; true
    var password = document.getElementById("password").value; true

    
    if (username === "barbie" && password === "1234") {
        alert("Welcome, Barbie!");
        
        window.location.href = "https://shop.mattel.com/pt-br/pages/barbie";
    } else {
        alert("Invalid username or password. Please try again.");
    }
});

document.getElementById("registerButton").addEventListener("click", function () {
});
