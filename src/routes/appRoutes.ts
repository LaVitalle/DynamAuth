import { Router } from 'express';
import usrRoute from './users/userRoutes'

const allRoutes = Router();

allRoutes.use('/user', usrRoute);

export default allRoutes;