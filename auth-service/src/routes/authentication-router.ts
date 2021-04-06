import express from 'express';

import { signin, signout, currentUser } from '../controller/authentication-controller';
import { validator } from '../middleware/validation-handler';
import { signInSchema } from '../schema/authentication-schema';

const router = express.Router();

router.post('/signin', validator(signInSchema), signin);
router.post('/signout', signout);
router.get('/me', currentUser);

export { router as authenticationRouter };