const express = require("express")
const router = express.Router();

const {getProduct, newProduct , getSingleProduct, updateProduct, deleteProduct} =  require('../controllers/productControllers')

router.route('/products').get(getProduct);
router.route('/products/:id').get(getSingleProduct);

router.route('/admin/products/new').post(newProduct);
router.route('/admin/products/:id')
                   .put(updateProduct)
                   .delete(deleteProduct);

module.exports = router;