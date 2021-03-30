import express from 'express';
import { json } from 'body-parser';

import { routeInitializer } from './startup/route-initializr';
import { initializeDb } from './startup/database-initializr';

const app = express();
app.use(json());


routeInitializer(app);

initializeDb();

app.listen(3000, () => console.log(`Auth-Service listening on port: 3000`));