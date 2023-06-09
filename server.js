const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "build")));

// The "catchall" handler: for any request that doesn't
// match one of the above, send back the index.html file
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
