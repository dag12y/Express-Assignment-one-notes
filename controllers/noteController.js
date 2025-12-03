import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// get the dir name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Directory to store notes
const filesDir = path.join(__dirname, "../files");

//Read note
export async function readNote(req, res) {
    const name = req.query.name;
    if (!name) return res.status(400).send("Filename is required");

    const filePath = path.join(filesDir, name + ".txt");

    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) return res.status(404).send("Note not found");
        res.send(data);
    });
}
export async function writeNote(req, res) {
    res.send("Write note placeholder");
}
