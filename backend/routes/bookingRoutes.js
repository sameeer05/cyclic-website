const { verifyToken, verifyTokenAndAuthorization } = require('../controllers/verifyToken');
const { createBooking, getUserBookings, getAllBookings } = require('../controllers/bookingController');
const router = require('express').Router();


// New Payment Route
router.post('/new/:id', verifyTokenAndAuthorization, createBooking);

// Get All Bookings
router.get('/all', verifyToken, getAllBookings);

// Get a User's Bookings
router.get('/:userId', verifyToken, getUserBookings);


module.exports = router;