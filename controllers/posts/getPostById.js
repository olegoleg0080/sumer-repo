import { getAllPosts } from "../../helpers/index.js";
import { Post } from "../../model/Post.js";

const getPostById = async (req, res) => {
    
    const postId = req.params.id;
    // const postsArr = await getAllPosts();
    const result = await Post.findById(postId);

    // const result = postsArr.find((post) => post.id === postId);
    if (!result) {
        res.status(400).send(`Can not find a post with id ${postId}`);
    }
    res.json(result);
};

export default getPostById;
