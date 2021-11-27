require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

const sendEMailController = require('./controllers/sendEmail');

// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(express.json());

// routes
app.get('/', (req, res) => {
  res.send(`<h1>Email Project</h1>
  <h2>Send email with:</h2>
  <ol>
    <li><a href="/send/ethereal">ETHEREAL</a></li><br>
    <li><a href="/send/sendgrid">SENDGRID</a></li>
  </ol>
  `);
});

app.get('/send/ethereal', sendEMailController.sendEmailEthereal);
app.get('/send/sendgrid', sendEMailController.sendEmailSendGrid);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
