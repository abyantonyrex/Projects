const API_BASE_URL = "https://abycart-backend.onrender.com"; // Backend URL

// **Register User**
document.getElementById("registerForm")?.addEventListener("submit", async function (event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const response = await fetch(`${API_BASE_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password })
    });

    const data = await response.json();
    document.getElementById("registerMessage").innerText = data.message;
    
    if (response.ok) {
        alert("Registration successful! Redirecting to login...");
        window.location.href = "login.html"; // Redirect to login page
    }
});

// **Login User**
document.getElementById("loginForm")?.addEventListener("submit", async function (event) {
    event.preventDefault();
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const response = await fetch(`${API_BASE_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    });

    const data = await response.json();
    document.getElementById("loginMessage").innerText = data.message;
    
    if (data.token) {
        localStorage.setItem("token", data.token); // Store token in local storage
        alert("Login successful!");
        window.location.href = "dashboard.html"; // Redirect to dashboard
    }
});
