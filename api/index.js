const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// In-memory mock database for Vercel deployment (avoids sqlite3 binary issues)
let businesses = [
  { id: 1, name: "Addis Tech Solutions", identifier: "TIN123456", trust_score: 95, status: "Excellent", verified: true },
  { id: 2, name: "Ethio Trading Co", identifier: "0911234567", trust_score: 40, status: "Suspicious", verified: false },
  { id: 3, name: "Safeway Logistics", identifier: "TIN987654", trust_score: 82, status: "Good", verified: true }
];

let reports = [];

// Verify Endpoint
app.get('/api/verify', (req, res) => {
  const { query } = req.query;
  
  if (!query) {
    return res.status(400).json({ error: 'Search query is required' });
  }

  const q = query.toLowerCase();
  const results = businesses.filter(b => b.name.toLowerCase().includes(q) || b.identifier.toLowerCase() === q);

  res.json({ results });
});

// Report Endpoint
app.post('/api/report', (req, res) => {
  const { identifier, description } = req.body;
  
  if (!identifier || !description) {
    return res.status(400).json({ error: 'Identifier and description are required' });
  }

  reports.push({ id: reports.length + 1, business_identifier: identifier, description, created_at: new Date() });
  
  // Decrease trust score slightly upon report
  const bizIndex = businesses.findIndex(b => b.identifier === identifier);
  if (bizIndex !== -1) {
    businesses[bizIndex].trust_score = Math.max(0, businesses[bizIndex].trust_score - 5);
  }

  res.json({ message: 'Report submitted successfully', id: reports.length });
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
