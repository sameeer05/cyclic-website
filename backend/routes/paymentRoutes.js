const { verifyTokenAndAuthorization } = require('../controllers/verifyToken');
const {newPayment, checkStatus} = require('../controllers/paymentController');
const router = require('express').Router();


// New Payment Route
router.post('/:id', verifyTokenAndAuthorization, newPayment);

// Check Payment Status Route
router.post('/status/:txnId', checkStatus);

module.exports = router;