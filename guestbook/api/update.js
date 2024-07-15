const sqlite3 = require("sqlite3").verbose();
const fs = require("fs");

const db = new sqlite3.Database("./guestbook.db");

function updateDatabase(){
    db.all("SELECT id, message FROM entries", (err, rows) => {
        if(err) {
            console.log(err);
        }
        rows.forEach(row => {
            const message = row.message;
            const id = row.id;
            
            const blacklist = fs.readFileSync("blacklist.txt", "utf8").split("\n");
    
            blacklist.forEach(word => {
                if(message.includes(word.toLowerCase())) {
                    db.run("DELETE FROM entries WHERE id = ?", [id], (err) => {
                        if(err) {
                            console.log(err);
                        }
                        else {
                            console.log(`Message with id ${id} and content "${message}" has been blacklisted.`);
                        }
                    });
                    
                }
                else {
                    console.log(`Message with id ${id} and content "${message}" has been approved.`);
                }
            });

            
        });
    });
    
}

updateDatabase();

module.exports = updateDatabase;