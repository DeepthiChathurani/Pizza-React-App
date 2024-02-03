const express = require('express');
const {submitContactDetail} = require("../controller/ContactController");
const router = express.Router();

router.post('/submit',submitContactDetail)
module.exports=router;