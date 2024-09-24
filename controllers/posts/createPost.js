import { Post } from "../../model/Post.js";

const createPost = async (req, res) => {
    // const { title, body } = req.body;
    // if (!title || !body) {
    //     throw HTTPError(401, "Title and body are required")
    //     // res.status(400).send(`Title and body are required`);
    //     return;
    // }
    const result = await Post.create({...req.body});

    // const postsArr = await getAllPosts();
    // const newPost = { id: nanoid(), title, body };
    // postsArr.push(newPost);
    // await rewriteJSON(postsArr);
    res.json(result);
};

export default createPost