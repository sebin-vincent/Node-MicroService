import Joi from 'joi';
import express from 'express';

import { AuthenticationError } from '../error/authentication-error';

export const validator = (schema: Joi.Schema) => {
    return (req: express.Request, resp: express.Response, next: express.NextFunction) => {

        const { error } = schema.validate(req.body);

        if (!error) {
            next();
        } else {
            const { details } = error;
            const message = details.map(e => e.message).join(',');
            console.info(`Validation error : ${message}`);
            throw new AuthenticationError(400, message);
        }
    };

}
