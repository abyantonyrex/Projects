const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Create MySQL connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",       // Change this if your MySQL user is different
    password: "HackerBommer!1",       // Add MySQL password if set
    database: "abycart"
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.error("Database connection failed:", err);
        return;
    }
    console.log("Connected to MySQL database.");
});

// Serve static files from "public"
app.use(express.static(path.join(__dirname, "public")));

// Route to serve login page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "AC-login.html"));
});

// Route to serve Abycart page
app.get("/abycart", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "Aby-html-css-project.html"));
});

// Handle POST form submission
app.post("/submit", (req, res) => {
    const { name, password } = req.body; // Get user input

    // Check user in the database
    const query = "SELECT * FROM users WHERE email = ? AND password = ?";
    db.query(query, [name, password], (err, results) => {
        if (err) {
            console.error("Query error:", err);
            res.status(500).send("Internal Server Error");
            return;
        }

        if (results.length > 0) {
            // Valid user, redirect to Abycart
            res.redirect("/abycart");
        } else {
            // Invalid user, show alert
            res.send(`
                <script>
                    alert("Invalid email or password! Please try again.");
                    window.location.href = "/";
                </script>
            `);
        }
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
