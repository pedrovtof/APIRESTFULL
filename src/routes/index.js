const router = require('express').Router()

const ProductsControler = require ('../controllers/products')

router.get('/products/:id?', ProductsControler.get)
router.post('/products', ProductsControler.post)
router.put('/products/:id', ProductsControler.put)
router.delete('/products/:id', ProductsControler.dell)

module.exports = router