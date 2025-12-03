# Express Assignment one : Note

## Description

This is a small Express.js server that allows users to create, read,
update, and delete text notes stored as `.txt` files inside a `files/`
folder.

The server supports the following HTTP methods:

-   **GET** → Read a note
-   **POST** → Create a note (or overwrite if exists)
-   **PATCH** → Append to an existing note
-   **DELETE** → Delete a note

All routes are under `/api/note`.

------------------------------------------------------------------------

## Project Structure

    express-note-server/
    │
    ├─ controllers/
    │   └─ noteController.js    # Contains the logic for reading, writing, appending, deleting notes
    │
    ├─ routes/
    │   └─ noteRouter.js        # Express router for note routes
    │
    ├─ middleware/
    │   └─ notFound.js          # Catch-all 404 middleware
    │
    ├─ files/                   # Stores the .txt note files
    ├─ server.js                # Entry point of the server
    └─ package.json

------------------------------------------------------------------------

## Installation

Clone the repository:

``` bash
git clone https://github.com/dag12y/Express-Assignment-one-notes.git
cd Express-Assignment-one-notes
```

Install dependencies:

``` bash
npm install
```

Start the server:

``` bash
npm run dev
```

Server will run at:

    http://localhost:3000

------------------------------------------------------------------------

## API Endpoints

### 1. Read Note

**GET** `/api/note/read?name=<filename>`

Reads the content of `<filename>.txt`.

Returns **Note not found** if the file doesn't exist.

------------------------------------------------------------------------

### 2. Create or Overwrite Note

**POST** `/api/note/write?name=<filename>`
**Body:** `<text content>`

Creates a new note or overwrites an existing note.

------------------------------------------------------------------------

### 3. Append Note

**PATCH** `/api/note/write?name=<filename>`
**Body:** `<text content>`

Appends content to an existing note.
Creates a new line at the end of the note with the new content.

------------------------------------------------------------------------

### 4. Delete Note

**DELETE** `/api/note/write?name=<filename>`

Deletes the note file from the `files/` folder.

------------------------------------------------------------------------

## Middleware

`notFound.js` → catches all unmatched routes and returns:

    Route not found

------------------------------------------------------------------------

## Notes

-   All notes are stored as `.txt` files inside the `files/` folder.
-   `express.text()` middleware is used to parse raw text bodies.
-   File operations use Node.js `fs` module.
