import express from 'express';

import { signin, signout, currentUser } from '../controller/authentication-controller';

const router = express.Router();

router.post('/signin', signin);
router.post('/signout', signout);
router.get('/me', currentUser);

export { router as authenticationRouter };