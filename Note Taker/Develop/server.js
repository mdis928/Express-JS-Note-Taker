// Dependencies
const express = require ('express');
const path = require ('path');
const fs = require ('fs');
const {v4:uuidv4}

// Sets up the Express App
const app = express ();
const PORT = process.env.PORT || 3000;

// DATA
const newNote = []

// Sets up the express app to handle parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'));

// Basic routes that sends the user first to the AJAX Page
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public','index.html')));

app.get('/api/notes', (req, res) => res.sendFile(path.join(__dirname, 'public', 'notes.html')));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'public', 'notes.html')));

app.post('/notes', (req, res) => {
    const saveNote = req.body;
    console.log (saveNote);
    saveNote.id = uuidv4 ();
    let data = JSON.parse (fs.readFileSync("./db/db.json","utf-8"));
    data.push (saveNote);
    res.json (data);
});

app.get('/notes', (req, res) => {
    let data = JSON.parse (fs.readFileSync("./db/db.json","utf-8"));
    res.json (data)
})

app.delete('/api/notes'), (req, res) => {
    // Insert code here

};

// Starts the server to begin listening
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));




