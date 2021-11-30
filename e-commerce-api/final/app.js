require('dotenv').config();
// express
const express = require('express');
const app = express();

// database
const connectDB = require('./db/connect');


const port = process.env.PORT || 5000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    console.log('CONNECTED TO DB...');
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (err) {
    console.error(err.message);
  }
};
start();