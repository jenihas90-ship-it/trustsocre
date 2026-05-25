const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');

// Vercel serverless functions only allow writing to /tmp
const isProd = process.env.NODE_ENV === 'production';
const dbPath = isProd ? '/tmp/database.sqlite' : path.join(__dirname, 'database.sqlite');

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database', err.message);
  } else {
    console.log('Connected to the SQLite database.');
    
    // Initialize tables
    db.serialize(() => {
      db.run(`CREATE TABLE IF NOT EXISTS businesses (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        identifier TEXT,
        trust_score INTEGER,
        status TEXT,
        verified BOOLEAN
      )`);

      db.run(`CREATE TABLE IF NOT EXISTS reports (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        business_identifier TEXT,
        description TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )`);

      // Seed data if empty
      db.get("SELECT COUNT(*) as count FROM businesses", (err, row) => {
        if (row && row.count === 0) {
          const stmt = db.prepare("INSERT INTO businesses (name, identifier, trust_score, status, verified) VALUES (?, ?, ?, ?, ?)");
          stmt.run("Addis Tech Solutions", "TIN123456", 95, "Excellent", true);
          stmt.run("Ethio Trading Co", "0911234567", 40, "Suspicious", false);
          stmt.run("Safeway Logistics", "TIN987654", 82, "Good", true);
          stmt.finalize();
        }
      });
    });
  }
});

module.exports = db;
