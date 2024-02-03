var express = require('express');
var router = express.Router();
const {productList}=require('../constant/const')
const {getAllProducts} = require("../controller/ProductController");
/* GET users listing. */
router.get('/all', getAllProducts);

module.exports = router;
