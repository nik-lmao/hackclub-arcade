const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const CORS = require('cors');

const db = new sqlite3.Database('./school.db');

const app = express();

app.use(express.json());
app.use(CORS());

app.get("/", (req, res) => {
    res.send('Hello World!');
});

app.post("/new", (req, res) => {
    const { owner, type, subject, description, until } = req.body;

    if (!owner || !type || !subject || !description || !until) {
        return res.status(400).send('Missing required fields');
    }

    if(type !== 'homework' && type !== 'exam') {
        return res.status(400).send('Invalid type');
    }

    if(owner < 0 || owner > 1){
        return res.status(400).send('Invalid owner');
    }

    if(subject.length > 3){
        return res.status(400).send('Invalid subject');
    }

    db.run('INSERT INTO work (owner, type, subject, description, until, done) VALUES (?, ?, ?, ?, ?, ?)', 
        [owner, type, subject, description, until, false], 
        function(err) {
            if (err) {
                console.error(err.message);
                return res.status(500).send('Internal Server Error');
            }
            res.status(201).send('Record created');
        }
    );
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
