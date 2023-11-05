const express = require("express");
const router = express.Router();
const multer = require("multer");
const bodyParser = require("body-parser");
const path = require("path");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../public/userImage"));
    },
    filename: function (req, file, cb) {
        const name = Date.now() + "-" + file.originalname;
        cb(null, name);
    },
});

const upload = multer({ storage: storage });

const postController = require("../controllers/postController");
router.post("/posts", upload.single("image"), postController.createPost);
router.get("/get", postController.getpost);
router.delete("/delete/:id", postController.deletePost);
router.put("/update", upload.single("image"), postController.updatePost); // Fixed typo here

module.exports = router;
