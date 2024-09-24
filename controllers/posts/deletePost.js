import HTTPError from "../../helpers/HTTPError.js";
import { Post } from "../../model/Post.js";

const deletePost = async (req, res) => {
    const postId = req.params.id;
    const post = await Post.findByIdAndDelete(postId)
    if (!post) {
        throw HTTPError(400, "Ca not finde post by id")
    }

    res.json({post, message: "delete succes"});
}

export default deletePost