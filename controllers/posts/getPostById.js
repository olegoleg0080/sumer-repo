import {  populate } from "dotenv";
import { Post } from "../../model/Post.js";

const getPostById = async (req, res) => {
    const {_id:owner} = req.user;
    const postId = req.params.id;

    const result = await Post.findOne({_id: postId, owner}).populate("owner", "email", "userName");
    if (!result) {
        res.status(400).send(`Can not find a post with id ${postId}`);
    }
    res.json(result);
};

export default getPostById;
