import express from "express";
import noteRouter from "./routes/noteRouter.js"; 
import { notFound } from "./middleware/notFound.js";

const app = express();
const PORT = 3000;

// Middleware to parse raw text bodies
app.use(express.text());

// Use note router
app.use("/api/note", noteRouter);

// Catch-all 404 middleware
app.use(notFound);

app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
});
