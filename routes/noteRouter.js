import express from 'express' 
import {readNote,writeNote,deleteNote} from "../controllers/noteController.js";

const noteRouter = express.Router();

noteRouter.get("/read", readNote);
noteRouter.post("/write",writeNote);
noteRouter.delete("/write",deleteNote)

export default noteRouter
