import { isValidObjectId } from "mongoose";
import { HTTPError } from "../helpers/index.js";

export const isValidId = (req, res, next) => {
        
    const { id } = req.params;

    if (!isValidObjectId(id)) {
        return next(HTTPError(404, `${id} - is not valid id`));
    }
    next();
};

export default isValidId;