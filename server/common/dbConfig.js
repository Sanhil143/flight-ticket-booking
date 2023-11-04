export const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  host: process.env.HOST, // You can use 'localhost\\instance' to connect to named instance
  database: process.env.DB_NAME,
};
