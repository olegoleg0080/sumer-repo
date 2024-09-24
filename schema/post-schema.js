import Joi from "joi";

export const addPostschema = Joi.object({
    title: Joi.string()
        .required()
        .messages({ "string.required": "title is req" }),
    body: Joi.string()
        .required()
        .messages({ "string.required": "body is req" }),
    typePost: Joi.string()
    .required()
    .messages({ "string.required": "typePost is req" }),
    status: Joi.boolean()
    .required()
    .messages({ "string.required": "status is req" }),
});

export const editPostschema = Joi.object({
    title: Joi.string(),
    body: Joi.string().messages({ "string.required": "body is req" }),
    typePost: Joi.string(),
    status: Joi.boolean(),
});
