const express = require('express');
const cors = require('cors');
const db = require('./database');

const app = express();

app.use(cors());
app.use(express.json());

// Verify Endpoint
app.get('/api/verify', (req, res) => {
  const { query } = req.query;
  
  if (!query) {
    return res.status(400).json({ error: 'Search query is required' });
  }

  const sql = `SELECT * FROM businesses WHERE name LIKE ? OR identifier = ?`;
  const params = [`%${query}%`, query];

  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ results: rows });
  });
});

// Report Endpoint
app.post('/api/report', (req, res) => {
  const { identifier, description } = req.body;
  
  if (!identifier || !description) {
    return res.status(400).json({ error: 'Identifier and description are required' });
  }

  const sql = `INSERT INTO reports (business_identifier, description) VALUES (?, ?)`;
  db.run(sql, [identifier, description], function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    
    // For demonstration, decrease trust score slightly upon report
    db.run(`UPDATE businesses SET trust_score = MAX(0, trust_score - 5) WHERE identifier = ?`, [identifier]);

    res.json({ message: 'Report submitted successfully', id: this.lastID });
  });
});

// Start local server if not running in Vercel
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

// Export for Vercel
module.exports = app;
