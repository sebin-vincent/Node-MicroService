import express from 'express';
import { json } from 'body-parser';

const app = express();
app.use(json());

app.get('/api/users/me', (req, resp) => resp.send({ health: true, active: true }));

app.listen(3000, () => console.log(`Auth-Service listening on port: 3000!!`));