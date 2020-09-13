const { validationResult, check, oneOf } = require('express-validator');
const asyncHandler = require('../middleware/asyncHandler');

// Update Book Validation
// exports.updateValidation = () => {
//   // return oneOf([
//   //   [
//   //   check('title').exists(),
//   //   check('author').exists(),
//   //   check('genre').exists(),
//   //   check('format').exists(),
//   //   check('releaseDate').exists(),
//   //   ]
//   ], asyncHandler, async (req, res, next) => {
//   //   console.log('after valid')
//   //   const errors = validationResult(req);
//   //   if (!errors.isEmpty()) {
//   //     return res.status(400).json({ errors: errors.array() });
//   //   };
//   //   console.log('hello')
//     return next();
//   });
// };
