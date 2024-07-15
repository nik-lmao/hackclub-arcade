const express = require("express");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./guestbook.db");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
});

const updateDatabase = require("./update");

function validateMessage(name, message) {
    if(name === "" || message === "" || name.length > 50 || message.length > 200 || name.length < 2 || message.length < 10) {
        return false;
    }
    return true;
}

app.post("/new", (req, res) => {
    const name = req.body.name;
    const message = req.body.message;
    const ip_address = req.ip;

    const valid = validateMessage(name, message);
    if(!valid) {
        return res.status(400).send("Invalid name or message");
    }

    db.run("INSERT INTO entries (name, message, created_at, ip_address) VALUES (?, ?, ?, ?)", [name, message, new Date(), ip_address], (err) => {
        if(err) {
            return res.status(500).send("Error saving entry");
        }
    });

    res.status(201).json({name, message});

    updateDatabase();
});

app.get("/entries", (req, res) => {
    db.all("SELECT name, message, created_at FROM entries ORDER BY created_at DESC LIMIT 50", (err, rows) => {
        if (err) {
            return res.status(500).send("Error retrieving entries");
        }
        res.status(200).json(rows);
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
    console.log("http://localhost:3000");
});
