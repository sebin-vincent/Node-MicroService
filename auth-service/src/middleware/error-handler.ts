import { Request, Response, NextFunction } from 'express';

import { AuthenticationError } from '../error/authentication-error';
import { ApiResponse } from '../util/ApiResponse';

export const errorHandler = (
    error: AuthenticationError,
    req: Request,
    resp: Response,
    next: NextFunction
) => {
    if (error) {
        const status = error.status;
        resp.status(status).send(new ApiResponse(status, error.message));
    } else {
        console.log("Invalid controll flow");

    }

}