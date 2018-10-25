const uploadHandler = (req, res) => {
    //With express-fileupload we can grab the files like this
    let img = req.files.image; //"image" is the name of the input

    res.send('Not ready yet');
};

module.exports = uploadHandler;
