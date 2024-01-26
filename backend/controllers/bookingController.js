const Booking = require('../models/Booking');

// Create a new Booking
const createBooking = async (req, res) => {
    const newBooking = new Booking(req.body)

    try {
        const savedBooking = await newBooking.save()
        res.status(200).json(savedBooking)
    } catch (err) {
        res.status(200).json(err)
    }
}

// Get a User's Orders
const getUserBookings = async (req, res) => {
    console.log(req.params.id)
    try {
        const bookings = await Booking.find({ userId: req.params.userId });
        res.status(200).json(bookings);
    } catch (err) {
        res.status(500).json(err);
    }
}

const getAllBookings = async (req, res) => {
    console.log('get all bookings')
    try {
        const allBookings = await Booking.find();
        res.status(200).json(allBookings);
    } catch (err) {
        res.status(500).json(err);
    }
}

module.exports = {
    createBooking,
    getUserBookings,
    getAllBookings
}