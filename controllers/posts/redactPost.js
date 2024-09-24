import { Post } from "../../model/Post.js";

const redactPost = async (req, res) => {
    const postId = req.params.id;
    

    const newPost = await Post.findByIdAndUpdate(postId, {...req.body});
    if (!newPost) {
        res.status(400).send(`Can not find a post with id ${postId}`);
        return;
    }
    res.json(newPost);
}
export default redactPost