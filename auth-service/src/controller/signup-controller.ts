import { Request, Response } from 'express';

import { ApiResponse } from '../util/ApiResponse';
import { User } from '../model/user';
import { AuthenticationError } from '../error/authentication-error';

export const signup = async (req: Request, resp: Response) => {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
        throw new AuthenticationError(409, 'User already exist');
    }

    const newUser = User.build({ email, password });

    await newUser.save();

    resp.status(201).send(new ApiResponse(201, 'Created', newUser));
}


