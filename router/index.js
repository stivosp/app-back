import { Router } from "express";
import authorsRouter from "./authors.js";
import mangasRouter from "./mangas.js";
import chaptersRouter from "./chapters.js";
import categoriesRouter from "./categories.js";
import usersRouter from "./users.js";

let indexRouter = Router()

indexRouter.use('/authors',authorsRouter);
indexRouter.use('/mangas',mangasRouter);
indexRouter.use('/chapters',chaptersRouter);
indexRouter.use('/categories', categoriesRouter);
indexRouter.use('/users', usersRouter);

export default indexRouter
