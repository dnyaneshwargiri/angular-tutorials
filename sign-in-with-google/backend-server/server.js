const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // For parsing JSON request bodies

app.post('/api/login', (req, res) => {
  // Handle POST request here
  console.log(req.body); // Print the POST request body to console
  res.redirect('http://localhost:4200/dashboard/')
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
