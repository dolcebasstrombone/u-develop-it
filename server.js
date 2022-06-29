const express = require("express");
const mysql = require("mysql2");

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware (bruh what? check last week)
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    // Your MySQL username,
    user: "root",
    // Your MySQL password
    password: "Gasaplemop1!",
    database: "election",
  },
  console.log("Connected to the election database.")
);

db.query(`SELECT * FROM candidates`, (err, rows) => {
  console.log(rows);
});

//a get reqest for ya basic endpoint
app.get("/", (req, res) => {
  res.json({
    message: "Hello World",
  });
});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

//starts server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
