const express = require('express');
const path = require('path');
const htmlRoutes = require('./server/routes/htmlRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the client folder
app.use(express.static(path.join(__dirname, '../client')));

// Use the htmlRoutes
htmlRoutes(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
