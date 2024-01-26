const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema(
    {
        userId: {
            type: String, 
            required: true,
        },
        services: {
            type: Array,
        },
        selectedAddress: {
            type: Object,
        },
        serviceTiming: {
            type: String,
        },
        startDate: {
            type: Date,
        },
        totalPrice: {
            type: Number,
            required: true
        }, 
        transactionData: {
            type: Object,
        }
    },
    { timestamps: true }
)

module.exports = mongoose.model("Booking", BookingSchema);