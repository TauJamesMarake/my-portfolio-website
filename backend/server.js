const express = require('express');
const cors = require('cors');
require('dotenv').config();

const projectsRouter = require('./src/routes/projects');
const contactRouter = require('./src/routes/contact');

const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use('/api/projects', projectsRouter);
app.use('/api/contact', contactRouter);

// health check
app.get('/', (req, res) => {
  res.json({ message: 'Portfolio backend is live!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});