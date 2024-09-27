import HTTPError from "../../helpers/HTTPError.js";
import { User } from "../../model/User.js";
import bcrypt from "bcryptjs";

const signup = async (req, res) => {
    const { userName, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
        throw HTTPError(409, "Email alredy exists");
    }
    const pass = await bcrypt.hash(password, 10);
    const newUser = await User.create({ userName, email, password: pass });

    res.status(201).json({
        user: {
            email,
            id: newUser._id,
            userName: newUser.userName,
        },
    });
};

export default signup;
