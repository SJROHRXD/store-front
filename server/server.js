const express = require('express');
const connectDB = require('./config/connection');
const path = require('path');

const app = express();

// Connect DB
connectDB();

// Init middleware
app.use(express.json({ extended: false }));

// Define Routes

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
