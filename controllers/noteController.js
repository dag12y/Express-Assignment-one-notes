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
//write note
export async function writeNote(req, res) {
    const name = req.query.name;
    if (!name) return res.status(400).send("Filename is required");

    const filePath = path.join(filesDir, name + ".txt");
    const content = req.body || "";

    fs.writeFile(filePath, content, (err) => {
        if (err) return res.status(500).send("Error saving note");
        res.send("Note saved successfully!");
    });
}

export function deleteNote(req, res) {
    const name = req.query.name;
    if (!name) return res.status(400).send("Filename is required");

    const filePath = path.join(filesDir, name + ".txt");

    fs.unlink(filePath, (err) => {
        if (err)
            return res.status(404).send("Note not found or already deleted");
        res.send("Note deleted successfully!");
    });
}


