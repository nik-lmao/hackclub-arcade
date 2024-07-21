

const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./school.db');

db.serialize(() => {
    db.run('CREATE TABLE IF NOT EXISTS work (id INTEGER PRIMARY KEY, owner INTEGER, type TEXT, subject TEXT, description TEXT, until INTEGER, done BOOLEAN)');
});