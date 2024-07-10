
// const mongoose = require("mongoose");
// require("dotenv").config()

// const url=process.env.DB_URL;
// const db = process.env.DATABASE;
// mongoose.connect("mongodb+srv://22BCE9506:1234@cluster0.bucrpbq.mongodb.net/test")
// .then(res=>console.log("connection is successfull"))
// .catch(err=>console.log(err))
const mongoose = require('mongoose');
require('dotenv').config();

const dbUrl = process.env.DB_URL;
if (!dbUrl) {
  console.error('DB_URL environment variable is not set');
  process.exit(1);
}

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to the database'))
  .catch((err) => console.error('Database connection error:', err));

