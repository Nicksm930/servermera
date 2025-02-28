// dbConfig.js

const { Client } = require('pg'); // Import pg Client

// Use the DATABASE_URL environment variable, which should be set according to your environment.
const connectionString = process.env.INTERNAL_DATABASE_URL;

const client = new Client({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Required for SSL on Render
  },
});

// Export client to use in other parts of the app
module.exports = client;