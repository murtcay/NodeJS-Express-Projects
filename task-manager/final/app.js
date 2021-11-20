const express = require("express");
const app = express();
const taskRoute = require('./routes/taskRoute');
const connectDB = require('./db/connect');
require('dotenv').config();
// Middlewares
app.use(express.static('./public'));
app.use(express.json());

// Routes
app.use('/api/v1/tasks', taskRoute);


const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log('CONNECTED TO DB...');
    app.listen(port, console.log(`server is listening on port: ${port}`));
  } catch (err) {
    console.error(err.message);
  }
};

start();