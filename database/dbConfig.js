const { Client } = require('pg');

// Use the DATABASE_URL environment variable, which should be set according to your environment.
const connectionString = process.env.DATABASE_URL;

const client = new Client({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Required for SSL on Render
  },
});


module.exports ={client};