const express = require("express");
const app = express();

app.get("/", (req, res) => {
 res.send("<h1>Hello!</h1><p>My first deployed web application.</p>");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
 console.log("Server running on port " + PORT);
});