import { Router } from "express";
import read from "../controlers/categories/read.js";
import create from '../controlers/categories/read.js';

const categoriesRouter = Router();

categoriesRouter.get('/', read);
categoriesRouter.post('/', create);


export default categoriesRouter;