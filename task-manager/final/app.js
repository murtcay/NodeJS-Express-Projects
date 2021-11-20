const express = require('express');
const app = express();

// Routes
app.get('/', (req, res) => {
    res.send('task manager app')
})

const port = 5000;
app.listen(port, console.log(`server is listening on port: ${port}`));