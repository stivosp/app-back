import { Router } from "express";
import Author from '../models/Author.js'
import create from "../controlers/authors/create.js";
import read from "../controlers/authors/read.js";

let authorsRouter = Router()

authorsRouter.post('/',create)

authorsRouter.get('/',read)

export default authorsRouter