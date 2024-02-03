const {productList} = require("../constant/const");
const ProductController={
    getAllProducts:function(req, res, next) {
        res.send(productList);
        /*data send krana nisa send*/
    }
}
module.exports=ProductController;