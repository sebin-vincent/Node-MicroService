import express, { response } from 'express';
import { ApiResponse } from '../util/ApiResponse';

export const signin = async (req: express.Request, resp: express.Response) => {
    resp.send(new ApiResponse(200, 'Signing In'));
}

export const signout = async (req: express.Request, resp: express.Response) => {
    resp.send(new ApiResponse(200, 'Signing out'));
}

export const currentUser = async (req: express.Request, resp: express.Response) => {
    resp.send(new ApiResponse(200, 'Current User'));
}