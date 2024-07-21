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

    if ([owner, type, subject, description, until].some(field => field === undefined)) {
        return res.status(400).send('Missing required fields');
    }

    if (type !== 'homework' && type !== 'exam') {
        return res.status(400).send('Invalid type');
    }

    if (owner < 0 || owner > 1) {
        return res.status(400).send('Invalid owner');
    }

    if (subject.length > 3) {
        return res.status(400).send('Invalid subject');
    }

    db.serialize(() => {
        db.get(`SELECT * FROM work WHERE owner = ? AND type = ? AND subject = ? AND description = ? AND until = ?`, [owner, type, subject, description, until], (err, row) => {
            if (err) {
                return res.status(500).send('Error checking task');
            }
            if (row) {
                return res.status(409).send('Task already exists');
            }

            if (both) {
                db.get(`SELECT * FROM work WHERE owner = ? AND type = ? AND subject = ? AND description = ? AND until = ?`, [0, type, subject, description, until], (err, row) => {
                    if (err) {
                        return res.status(500).send('Error checking task');
                    }
                    if (row) {
                        return res.status(409).send('Task already exists for another owner');
                    }

                    db.run(`INSERT INTO work (owner, type, subject, description, until, done) VALUES (?, ?, ?, ?, ?, ?)`, [0, type, subject, description, until, false], (err) => {
                        if (err) {
                            return res.status(500).send('Error creating task');
                        }
                    });
                });
            }

            db.run(`INSERT INTO work (owner, type, subject, description, until, done) VALUES (?, ?, ?, ?, ?, ?)`, [owner, type, subject, description, until, false], (err) => {
                if (err) {
                    return res.status(500).send('Error creating task');
                }
                return res.status(201).send('Task created');
            });
        });
    });
});

app.post("/done", (req, res) => {
    const { id } = req.body;

    if (id === undefined) {
        return res.status(400).send('Missing required fields');
    }

    db.run(`UPDATE work SET done = 1 WHERE id = ?`, [id], (err) => {
        if (err) {
            return res.status(500).send('Error updating task');
        }
        return res.status(200).send('Task updated');
    });
});

app.delete("/clear", (req, res) => {
    db.run(`DELETE FROM work`, (err) => {
        if (err) {
            return res.status(500).send('Error clearing tasks');
        }
        return res.status(200).send('Tasks cleared');
    });
});

app.get("/list", (req, res) => {
    const user = req.query.user;

    if (user === undefined) {
        return res.status(400).send('Missing required fields');
    }

    if (user < 0 || user > 1) {
        return res.status(400).send('Invalid user');
    }

    db.all(`SELECT * FROM work WHERE owner = ?`, [user], (err, rows) => {
        if (err) {
            return res.status(500).send('Error listing tasks');
        }

        const now = Date.now();
        const filteredRows = rows.filter(row => row.done === 0 || new Date(row.until).getTime() > now);

        return res.status(200).send(filteredRows);
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
