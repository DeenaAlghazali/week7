const express = require('express');
const crypt = require("bcrypt");
const controller = require('../controller');

const router = express.Router();

router.use(controller.hashepassword);
router.post("/signup", controller.signUp);
router.post("/login",controller.login);
router.use(controller.makeCookie);
router.get('/home', controller.homePage);

module.exports = router;