// Dependencies
var express = require ('express');
var path = require ('path');
var fs = require ('fs');

// Sets up the Express App
const app = express ();
const PORT = process.env.PORT || 3000;

// DATA
const newNote = []

// Sets up the express app to handle parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Basic routes that sends the user first to the AJAX Page
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public','index.html')));

app.get('/api/notes', (req, res) => res.sendFile(path.join(__dirname, 'public', 'notes.html')));

app.post('/api/notes', (req, res) => {
    const saveNote = req.body;
    console.log (saveNote);
    newNote.push (saveNote);
    res.json (saveNote);
});

app.delete('/api/notes'), (req, res) => {
    // Insert code here

};

// Starts the server to begin listening

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));




