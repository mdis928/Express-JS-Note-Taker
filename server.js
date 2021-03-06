// Dependencies
const express = require ('express');
const path = require ('path');
const fs = require ('fs');
const {v4:uuidv4} = require ('uuid');

// Sets up the Express App
const app = express ();
const PORT = process.env.PORT || 3000;

// Sets up the express app to handle parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'));

// Basic routes that sends the user first to the AJAX Page
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public','index.html')));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'public', 'notes.html')));

app.post('/api/notes', (req, res) => {
    const saveNote = req.body;
    saveNote.id = uuidv4 ();
    console.log (JSON.stringify(saveNote));
    let data = JSON.parse (fs.readFileSync("db/db.json","utf-8")); 
    data.push (saveNote);
    fs.writeFileSync ('db/db.json', JSON.stringify (data))
    res.json (data);
});

app.get('/api/notes', (req, res) => {
    let data = JSON.parse (fs.readFileSync("db/db.json","utf-8"));
    console.log (JSON.stringify (data));
    res.json (data);
})

app.delete('/api/notes/:id', (req, res) => {
    let noteId = req.params.id;   
    let data = JSON.parse (fs.readFileSync("db/db.json","utf-8"));
    console.log ("test");
    const newData = data.filter (note => note.id.toString() !==noteId)
    fs.writeFileSync ('db/db.json', JSON.stringify (newData))
    res.json (newData)
});

// Starts the server to begin listening
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));




