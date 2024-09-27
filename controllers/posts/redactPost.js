import { Post } from "../../model/Post.js";

const redactPost = async (req, res) => {
    const postId = req.params.id;
    const { _id: owner } = req.user;

    const newPost = await Post.findOneAndUpdate(
        { _id: postId, owner },
        { ...req.body }
    );
    if (!newPost) {
        res.status(400).send(`Can not find a post with id ${postId}`);
        return;
    }
    res.json(newPost);
};
export default redactPost;
