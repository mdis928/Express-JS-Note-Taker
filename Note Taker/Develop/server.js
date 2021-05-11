// Dependencies
var express = require ('express');
var path = require ('path');

// Sets up the Express App
const app = express ();
const PORT = process.env.PORT || 3000;

// Sets up the express app to handle parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());