import { Post } from "../../model/Post.js";
import fs from "fs/promises"
import path from "path"
import { cloudinary } from "../../helpers/index.js";
const createPost = async (req, res) => {
    const {_id: owner} = req.user
    // const {path: oldPath, fileName} = req.file;
    // const posterPeth = path.resolve("public", "posts")
    // const newPath = path.join(posterPeth, fileName)
    const postAvatar = await cloudinary.uploader.upload(req.file.path, {folder: "posts"})
    await fs.unlink(req.file.path)
    // await fs.rename(oldPath, newPath)
    const result = await Post.create({...req.body, owner, postAvatar: newPath});
    res.status(201).json(result);
};

export default createPost