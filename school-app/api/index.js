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
    const { owner, type, subject, description, until, both } = req.body;

    if (owner === undefined || type === undefined || subject === undefined || description === undefined || until === undefined) {
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

    db.use(`SELECT * FROM work WHERE owner = ? AND type = ? AND subject = ? AND description = ? AND until = ?`, [owner, type, subject, description, until], function(err, rows) {
        if (err) {
            return res.status(500).send('Error checking task');
        }
        if (rows.length > 0) {
            return res.status(409).send('Task already exists');
        }
    });

    if(both){
        db.run(`INSERT INTO work (owner, type, subject, description, until, done) VALUES (?, ?, ?, ?, ?, ?)`, [0, type, subject, description, until, false], function(err) {
            if (err) {
                return res.status(500).send('Error creating task');
            }
        });
        db.run(`INSERT INTO work (owner, type, subject, description, until, done) VALUES (?, ?, ?, ?, ?, ?)`, [1, type, subject, description, until, false], function(err) {
            if (err) {
                return res.status(500).send('Error creating task');
            }
            return res.status(201).send('Task created');
        });
    }
    else{
        db.run(`INSERT INTO work (owner, type, subject, description, until, done) VALUES (?, ?, ?, ?, ?, ?)`, [owner, type, subject, description, until, false], function(err) {
            if (err) {
                console.log(err);
                return res.status(500).send('Error creating task');
            }
            return res.status(201).send('Task created');
        });
    }

    
});

app.delete("/clear", (req, res) => {
    db.run(`DELETE FROM work`, function(err) {
        if (err) {
            return res.status(500).send('Error clearing tasks');
        }
        return res.status(200).send('Tasks cleared');
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
