const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  console.log('Get all books');
  res.status(200).json({ success: true, count: null, data: {} })
});

module.exports = router;