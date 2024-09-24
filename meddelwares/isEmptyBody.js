import { HTTPError } from "../helpers/index.js";

const isEmptyBody = (req, res, next) => {
    const keys = Object.keys(req.body);

    if (!keys.length) {
        next(HTTPError(400, "Request body is empty"));
    }
    next()
};
export default isEmptyBody;
