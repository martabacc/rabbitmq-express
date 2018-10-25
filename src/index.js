const express = require('express');
const fileUpload = require('express-fileupload');
const morgan = require('morgan');
const config = require('config');

const homeHandler = require('./routes/home.js');
const uploadHandler = require('./routes/upload.js');


const app = express();
app.use(fileUpload());

if(config.util.getEnv('NODE_ENV') !== 'test') {
    app.use(morgan('combined'));
}

app.get('/', homeHandler);
app.post('/upload', uploadHandler);

app.listen(4000, () => console.log('Example app listening on port 4000!'));
