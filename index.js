const express = require('express');
const app = express();
const PORT = 5000;

// Middleware (optional)
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello World from Express!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
