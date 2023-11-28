const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    // Handle signin logic here
    res.send('Signin Logic Here');
});

module.exports = router;
