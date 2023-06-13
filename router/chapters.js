import { Router } from "express";
import read from "../controlers/chapters/read.js";

let chaptersRouter = Router()

chaptersRouter.get('/',read)

export default chaptersRouter