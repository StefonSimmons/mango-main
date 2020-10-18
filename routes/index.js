const { Router } = require('express')
const controllers = require('../controllers')

const router = Router()

router.get('/', (req, res) => res.send('Try another endpoint'))

// router.get('/products', controllers.getProducts)
// router.get('/products/:id', controllers.getProduct)
router.post('/mail', controllerss.sendEmail)
// router.put('/products/:id', restrict, controllers.updateProduct)
// router.delete('/products/:id', restrict, controllers.deleteProduct)

// router.get('/search/newarrivals', controllers.newArrivals)

// router.get('/searching/:term', controllers.searchWord)

// router.get('/users', controllers.getUsers)
// router.post('/sign-up', controllers.signUp)
// router.post('/sign-in', controllers.signIn)
// router.get('/verify', restrict, controllers.verifyUser)


module.exports = router