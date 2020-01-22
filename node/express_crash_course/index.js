const express = require("express");
const path = require("path");
const members = require('./members');

const app = express();

const logger = (req, res, next) => {
    console.log("HELLO");
    next();
}

app.use(logger);

// get all members
app.get('/api/members', (req, res) => {
    res.json(members);
});


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

// Set Static folder
app.use(express.static(path.join(__dirname, "/public/")));


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));