const express = require("express");
const router = express.Router();
const loginController = require('../controllers/loginController');

router.post('/', loginController.login);
router.post('/logout', loginController.logout);
router.get('/checkSession', loginController.checkSession);

module.exports = router;
