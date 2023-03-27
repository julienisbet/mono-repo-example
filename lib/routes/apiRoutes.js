const { Router } = require('express');

module.exports = Router().get('/example', (req, res) => {
  res.json({ message: 'Hello friends from Express!' });
});
