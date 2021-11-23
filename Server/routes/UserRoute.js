const router = require('express').Router();

router.get('/all', (req, res) => {
  res.send('welcome User !!!');
});

// router.get('/', (req, res) => {
//   res.json({
//     username: 'Meow',
//   });
// });

module.exports = router;
