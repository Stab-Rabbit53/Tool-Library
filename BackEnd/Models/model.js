require('dotenv').config();
const { Pool } = require('pg');

const PG_URI = process.env.DATABASE_URI;

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  //change the query string for the user table
  query: (text, params, callback) => {
    console.log('SQL Query Executed:', text);
    return pool.query(text, params, callback);
  },
};
