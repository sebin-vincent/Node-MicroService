import express from 'express';
import { validator } from '../middleware/validation-handler';

import { signupSchema } from '../schema/signup-schema';
import { signup } from '../controller/signup-controller';

const router = express.Router();

router.post('/signup', validator(signupSchema), signup);

export { router as signupRouter };