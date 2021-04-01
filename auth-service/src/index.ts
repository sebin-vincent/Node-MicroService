import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';

import { routeInitializer } from './startup/route-initializr';
import { initializeDb } from './startup/database-initializr';

const app = express();
app.use(json());
app.set('trust proxy', true);
app.use(cookieSession({
    signed: false,
    secure: true
}));


routeInitializer(app);

initializeDb();

app.listen(3000, () => console.log(`Auth-Service listening on port: 3000`));

// kubectl create secret generic rsaJWT --from-file=private.key --from-file=public.key
