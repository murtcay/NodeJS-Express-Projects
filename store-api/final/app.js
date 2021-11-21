require('dotenv').config();
// async errors

const express = require('express');
const app = express();

const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');

// Middleware
app.use(express.json());

// Rootes
app.get('/', (req, res)=>{
  res.send('<h1>Store API</h1><a href="/api/v1/products">products route</a>');
}); 

// Product Routes

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    // Connect DB
    app.listen(port, console.log(`Server is listening on port: ${port}...`));

  } catch (err) {
    console.error(err.message);
  }
};

start();