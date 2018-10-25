const express = require('express');
const fileUpload = require('express-fileupload');
const morgan = require('morgan');
const config = require('config');

//Instantiate the app and set the fileupload parser to manage files
const app = express();
app.use(fileUpload());

if(config.util.getEnv('NODE_ENV') !== 'test') {
    //use morgan to log at command line
    app.use(morgan('combined')); //'combined' outputs the Apache style LOGs
}

app.get('/', (req, res) => res.send('Hello From ImageCompacter service'));

//The path that will handle the image file and throw them to the queue
app.post('/upload', (req, res) => {
    //With express-fileupload we can grab the files like this
    let img = req.files.image; //"image" is the name of the input

    res.send('Not ready yet');
});

//Finally start the app with the given port number
app.listen(4000, () => console.log('Example app listening on port 4000!'));
