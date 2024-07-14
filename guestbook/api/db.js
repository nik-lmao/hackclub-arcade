const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./guestbook.db');

db.run('CREATE TABLE IF NOT EXISTS entries (id INTEGER PRIMARY KEY, name TEXT, message TEXT, created_at DATETIME, ip_address TEXT)');