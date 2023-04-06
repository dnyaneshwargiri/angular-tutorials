const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the Angular dist folder
app.use(express.static(path.join(__dirname, '../calender-app/dist/calender-app')));

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../calender-app/dist/calender-app/index.html'));
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});



