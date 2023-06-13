import { Router } from "express";
import read from "../controlers/users/read.js";
import create from '../controlers/users/read.js';

const usersRouter = Router();

usersRouter.get('/', read);
usersRouter.post('/', create);

export default usersRouter;