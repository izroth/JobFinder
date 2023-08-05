const express = require('express');

const router = express.Router();
const singup = require('../controllers/SingUp');

router.post('/singup', singup);


module.exports = router;