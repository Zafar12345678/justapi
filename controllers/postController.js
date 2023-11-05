const Post = require("../models/postModel");

const createPost = async (req, res) => {
  try {
    const { title, content, description, category, link } = req.body;
    const post = new Post({
      image: req.file.filename, // Assuming you are uploading an image file and handling it with multer
      title,
      content,
      description,
      category,
      link,
    });

    const postData = await post.save();
    res.status(201).json({ success: true, msg: "Post created successfully", data: postData });
  } catch (error) {
    res.status(400).json({ success: false, msg: error.message });
  }
};
// get method 
const getpost = async(req,res)=>{
    try {
        const post = await Post.find({});
        res.status(200).json({ success: true, msg:" postData",data:post });
    } catch (error) {
        res.status(400).json({ success: false, msg: error.message });
        
    }
}
// delete method
const deletePost = async(req,res)=>{
    try {
        const id = req.params.id;
        await Post.deleteOne({_id:id});
        res.status(200).json({ success: true, msg:"post delete successfully!" });
        
    } catch (error) {
        res.status(400).json({ success: false, msg: error.message });
    }
}
//  update method
const updatePost = async(req,res)=>{
    try {
        
        if (req.file !==undefined) {
            var id = req.body.id;
            var filename= req.file.filename;
            var title = req.body.title;
            var content = req.body.content;
            var description = req.body.description;
            var category = req.body.category;
            var link = req.body.link;
           await Post.findByIdAndUpdate({_id:id},{$set:{image:filename,title:title,content:content,description:description,category:category,link:link}});
           res.status(200).json({ success: true, msg: "post update successfully!" });
        }
        else{
            
        if (req.file !==undefined) {
            var id = req.body.id;
            // var filename= req.file.filename;
            var title = req.body.title;
            var content = req.body.content;
            var description = req.body.description;
            var category = req.body.category;
            var link = req.body.link;
           await Post.findByIdAndUpdate({_id:id},{$set:{title:title,content:content,description:description,category:category,link:link}});
           res.status(200).json({ success: true, msg: "post update successfully!" });
        }
        }
    } catch (error) {
        res.status(400).json({ success: false, msg: error.message });
    }
}
module.exports = {
  createPost,
  getpost,
  deletePost,
  updatePost
};
