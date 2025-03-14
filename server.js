const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route to handle resume generation
app.post('/generate-resume', async (req, res) => {
  const { name, jobTitle, skills, experience } = req.body;

  if (!name || !jobTitle || !skills || !experience) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  // Mock AI resume generation (replace with OpenAI API later)
  const resume = `
    Name: ${name}
    Job Title: ${jobTitle}
    Skills: ${skills}
    Experience: ${experience}
  `;

  res.json({ resume });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
