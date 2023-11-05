const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  image: { 
   type: String, 
   required: true 
},
  title: { 
    type: String, 
    required: true 
},
  content: { 
    type: String,
     required: true 
    },
  description: { 
    type: String,
     required: true 
    },
  category: { 
    type: String,
     required: true
     },
  link: { 
    type: String, 
    required: true
 },
});

const Post = mongoose.model("Munna", postSchema);

module.exports = Post;
