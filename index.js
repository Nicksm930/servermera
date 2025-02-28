const express = require('express');
const cors = require('cors');
const client = require('./database/dbConfig.js'); // Import the configured client
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send("Welcome to Mera server");
});

app.listen(port, () => {
  // Connect to the database only when the server is starting
  client.connect()
    .then(() => {
      console.log("Connected to the database");
      return client.query('SELECT NOW()');
    })
    .then((res) => {
      console.log('Database time:', res.rows[0]);
    })
    .catch((err) => {
      console.error('Error connecting to the database', err.stack);
    })
    .finally(() => {
      // Optionally, you can close the connection here or keep it open depending on your use case
      // client.end(); // Uncomment if you want to disconnect immediately after the query
    });

  console.log("Mera Server Running");
});
