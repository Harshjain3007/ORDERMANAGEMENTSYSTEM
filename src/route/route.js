const express = require('express')

const router = express.Router()

const {registerCustomer} = require('../controllers/customerController')
const {orderDetails} = require('../controllers/orderController')


router.post('register',registerCustomer)

router.post('order/:id', orderDetails,)


module.exports=router;