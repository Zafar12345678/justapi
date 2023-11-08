
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://merningday123:merningday123@cluster0.6llqgoh.mongodb.net/software?retryWrites=true&w=majority");

app.use(cors());
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
    console.log('Connected to MongoDB');
});
// const postRoutes = require("./routes/postRoutes");
// app.use("/api", postRoutes);
const post_route = require("./routes/postRoute")
app.use("/api", post_route);

app.listen(5000, function() {
    console.log("Server is ready on port 5000");
}); 