const express = require('express')
const productsController = require('../controllers/product')

const router = express.Router();

// READ -> GET: localhost/products
router.get('/products', productsController.getAllProduct);

// CREATE -> POST: localhost/products
router.post('/product', productsController.createProduct);

// EDIT -> PUT: localhost/products/:ID
router.put('/products', (req, res, next) => {
    res.json({
        name: "joko riyadi",
        email: "jokori@gmail.com"
    });
    next();
});

// DELETE -> DELETE: localhost/products/:ID
router.delete('/products', (req, res, next) => {
    res.json({
        name: "joko riyadi",
        email: "jokori@gmail.com"
    });
    next();
})

module.exports = router;