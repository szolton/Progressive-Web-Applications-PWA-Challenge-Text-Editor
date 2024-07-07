const express = require('express');
const path = require('path');
const htmlRoutes = require('./routes/htmlRoutes'); // Adjust path as needed

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the client directory
app.use(express.static(path.join(__dirname, '../../client')));

// Use the htmlRoutes middleware
htmlRoutes(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
