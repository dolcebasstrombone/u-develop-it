const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware (bruh what? check last week)
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//get reqest for ya basic endpoint
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
