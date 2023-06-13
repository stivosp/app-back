import { Router } from "express";
import read from "../controlers/mangas/read.js";

let mangasRouter = Router()

mangasRouter.get('/',read)

export default mangasRouter