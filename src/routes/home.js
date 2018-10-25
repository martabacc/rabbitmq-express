const homeHandler = (req, res) => {
  return res.json({
    message: 'Hello From ImageCompacter service'
  });
};

module.exports = homeHandler;
