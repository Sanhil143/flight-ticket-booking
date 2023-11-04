const mysql = require('mysql');
import { dbConfig } from './dbConfig';

const connConfig = {
  host: dbConfig.host, // Replace with your MySQL server host
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.database,
  connectionLimit: 10, // Equivalent to max connections
  insecureAuth: false, // You can remove this line; it's not needed for most setups
};

class DBConnection {
  constructor() {
    this.pool = mysql.createPool(connConfig);
    this.pool.on('connection', (connection) => {
      console.log('Connected to MySQL database');
    });
    this.pool.on('error', (err) => {
      console.log('MySQL pool error:', err);
    });
  }

  getDbConnection() {
    return this.pool;
  }
}

module.exports = new DBConnection();
