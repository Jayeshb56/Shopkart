const express = require("express")
const router = express.Router();

const {getProduct, newProduct} =  require('../controllers/productControllers')

router.route('/products').get(getProduct);

router.route('/products/new').post(newProduct);

module.exports = router;