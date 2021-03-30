import Joi from 'joi';

export const signupSchema = Joi.object({
    email: Joi.string().email({ tlds: { allow: false } }),
    password: Joi.string().min(5).max(15)
});