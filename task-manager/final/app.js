const express = require("express");
const app = express();
const taskRoute = require('./routes/taskRoute');

// Middlewares
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("task manager app");
});

app.use('/api/v1/tasks', taskRoute);

const port = 5000;
app.listen(port, console.log(`server is listening on port: ${port}`));