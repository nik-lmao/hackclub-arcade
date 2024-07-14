const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./guestbook.db');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});


app.post('/new', (req, res) => {
    const name = req.body.name;
    const message = req.body.message;
    const ip_address = req.ip;

    if(!name || !message) {
        return res.status(400).send('Name and message are required');
    }

    db.run('INSERT INTO entries (name, message, created_at, ip_address) VALUES (?, ?, ?, ?)', [name, message, new Date(), ip_address], (err) => {
        if(err) {
            return res.status(500).send('Error saving entry');
        }
    });

    res.status(201).json({name, message});
});


app.get('/entries', (req, res) => {
    db.all('SELECT name, message, created_at FROM entries ORDER BY created_at DESC LIMIT 50', (err, rows) => {
        if (err) {
            return res.status(500).send('Error retrieving entries');
        }
        res.status(200).json(rows);
    });
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
    console.log('http://localhost:3000');
});