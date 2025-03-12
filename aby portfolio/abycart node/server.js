const express = require('express');
const path = require('path');
const mysql = require('mysql2');
const app = express();
const port = 3001;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Create MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'abyrex123',
    database: 'web'
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.error('❌ MySQL Connection Failed:', err);
    } else {
        console.log('✅ Connected to MySQL Database');
    }
});

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Route for home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
    console.log("🏠 Home Page Served Successfully");
});

// ✅ Store login data in MySQL
app.post('/register', (req, res) => {
    const { email, password } = req.body; // Get form data

    if (!email || !password) {
        return res.status(400).send('⚠️ Please enter both email and password.');
    }

    // Insert into login_details table
    const sql = 'INSERT INTO login_details (email, password) VALUES (?, ?)';
    db.query(sql, [email, password], (err, result) => {
        if (err) {
            console.error('❌ Error saving data:', err);
            res.status(500).send('⚠️ Server error, please try again.');
        } else {
            console.log('✅ User registered successfully:', result);
            res.redirect('/AC-login.html'); // Redirect to login page
        }
    });
});

// ✅ Login authentication
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send('⚠️ Please enter both email and password.');
    }

    // Check if email and password exist in the database
    const sql = 'SELECT * FROM login_details WHERE email = ? AND password = ?';
    db.query(sql, [email, password], (err, results) => {
        if (err) {
            console.error('❌ Error checking credentials:', err);
            return res.status(500).send('⚠️ Server error, please try again.');
        }

        if (results.length > 0) {
            console.log('✅ Login successful:', email);
            res.redirect('/index.html'); // Redirect to index page
        } else {
            console.log('❌ Invalid credentials:', email);
            res.send('<script>alert("Invalid email or password!"); window.location.href="/login.html";</script>');
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
});
