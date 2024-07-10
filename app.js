
// const express = require("express")
// const app = express();
// const cors = require("cors")
// require("./db/connection")
// const CarRouter = require("./router/CarRouts")
// const UserRouter = require("./router/UserRouts")
// const AdminRouter = require("./router/AdminRouter")
// const OrderRouter = require("./router/OrderRouter")

// app.use(express.json())
// app.use(cors());
// app.use(cors());
// app.use(express.urlencoded({extended:true}))

// app.use('/cars', CarRouter)
// app.use('/user', UserRouter)
// app.use('/admin', AdminRouter)
// app.use('/orders', OrderRouter)



// app.listen(5000, ()=>{
//     console.log("listening port 5000")
// })
const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = process.env.DB_URL;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
  try {
    await client.connect();
    console.log("Connected to the database!");
    // Your database operations go here
  } catch (err) {
    console.error("Database connection error: ", err);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);



