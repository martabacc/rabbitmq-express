const express = require('express');
const fileUpload = require('express-fileupload');

//Instantiate the app and set the fileupload parser to manage files
const app = express();
app.use(fileUpload());

//Our index entry point
app.get('/', (req, res) => res.send('Hello From ImageCompacter service'));

//The path that will handle the image file and throw them to the queue
app.post('/upload', (req, res) => {
    //With express-fileupload we can grab the files like this
    let img = req.files.image; //"image" is the name of the input

    res.send('Not ready yet');
});

//Finally start the app with the given port number
app.listen(4000, () => console.log('Example app listening on port 4000!'));

