import express from 'express' 
import {readNote,writeNote} from "../controllers/noteController.js";

const noteRouter = express.Router();

noteRouter.get("/read", readNote);
noteRouter.post("/write",writeNote);

export default noteRouter
