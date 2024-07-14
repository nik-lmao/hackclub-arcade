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





app.get('/entries', (req, res) => {
    db.all('SELECT * FROM entries ORDER BY created_at DESC LIMIT 50', (err, rows) => {
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