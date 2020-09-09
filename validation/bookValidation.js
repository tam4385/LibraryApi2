const { validationResult, check } = require('express-validator');

// Update Book Validation
exports.updateValidation = () => {
  return ([
    check('title', 'A title is required').exists(),
    check('author', 'An author is required').exists(),
    check('genre', 'A genre is required').exists(),
    check('format', 'A book format is required').exists(),
    check('releaseDate', 'A release data is required').exists()
  ]), async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    };

    next();
  };
};
