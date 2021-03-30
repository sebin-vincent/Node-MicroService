import express from 'express';

import { signupRouter } from '../routes/signup-router';
import { authenticationRouter } from '../routes/authentication-router';
import { errorHandler } from '../middleware/error-handler';



//Initiase all routes (public and private)
const initialize = (app: express.Express) => {


    app.use('/api/users', signupRouter);
    app.use('/api/users', authenticationRouter);

    app.use(errorHandler);
}

export { initialize as routeInitializer };