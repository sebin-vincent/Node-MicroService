import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
const fs = require('fs');
const util = require('util');

import { ApiResponse } from '../util/ApiResponse';
import { User } from '../model/user';
import { AuthenticationError } from '../error/authentication-error';


const readFile = util.promisify(fs.readFile);
let PRIVATE_KEY: any;

const setPrivateKey = async () => {
    PRIVATE_KEY = await readFile('/secret/private.key', 'utf8');
}

setPrivateKey();

export const signup = async (req: Request, resp: Response) => {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
        throw new AuthenticationError(409, 'User already exist');
    }

    const newUser = User.build({ email, password });

    await newUser.save();

    const tokenType = 'access-token';
    const accessToken = jwt.sign({ id: newUser._id, tokenType }, PRIVATE_KEY,
        {
            algorithm: 'RS256',
            expiresIn: '2h'
        });

    req.session = { jwt: accessToken };
    req.session.temporary = "YES";

    resp.status(201).send(new ApiResponse(201, 'Created', newUser));
}


