const express = require("express");
const http = require("http");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(bodyParser.json());
// Use cors middleware to enable CORS
app.use(cors());

// connection data base
const PORT = 8000;
const DB ="mongodb+srv://merningday123:merningday123@cluster0.6llqgoh.mongodb.net/software?retryWrites=true&w=majority";

mongoose
  .connect(DB)
  .then(() => {
    console.log("Connected to MongoDB");
    const server = http.createServer(app);
    server.listen(PORT, () => {
      console.log(`Server is running on :${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
