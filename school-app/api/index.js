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

    db.all(`SELECT * FROM work WHERE owner = ? AND type = ? AND subject = ? AND description = ? AND until = ?`, [owner, type, subject, description, until], function(err, rows) {
        if (err) {
            return res.status(500).send('Error checking task');
        }
        if (rows.length > 0) {
            return res.status(409).send('Task already exists');
        }


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
        } else {
            db.run(`INSERT INTO work (owner, type, subject, description, until, done) VALUES (?, ?, ?, ?, ?, ?)`, [owner, type, subject, description, until, false], function(err) {
                if (err) {
                    return res.status(500).send('Error creating task');
                }
                return res.status(201).send('Task created');
            });
        }
    });
});


app.post("/done", (req, res) => {
    const { id } = req.body;

    if (id === undefined) {
        return res.status(400).send('Missing required fields');
    }

    db.run(`UPDATE work SET done = 1 WHERE id = ?`, id, function(err) {
        if (err) {
            return res.status(500).send('Error updating task');
        }
        return res.status(200).send('Task updated');
    });
});

app.delete("/clear", (req, res) => {
    db.run(`DELETE FROM work`, function(err) {
        if (err) {
            return res.status(500).send('Error clearing tasks');
        }
        return res.status(200).send('Tasks cleared');
    });
});

app.get("/list", (req, res) => {
    const user = req.query.user;
    if(user === undefined){
        return res.status(400).send('Missing required fields');
    }
    if(user < 0 || user > 1){
        return res.status(400).send('Invalid user');
    }

    db.all(`SELECT * FROM work WHERE owner = ?`, user, function(err, rows) {
        if (err) {
            return res.status(500).send('Error listing tasks');
        }

        var send = [];

        rows.forEach(row => {
            if(row.done == 0 || row.until > Date.now()){
                send.push(row);
            }
        });
        return res.status(200).send(send);
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
