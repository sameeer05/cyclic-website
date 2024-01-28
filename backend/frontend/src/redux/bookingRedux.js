import { createSlice } from "@reduxjs/toolkit";

const bookingSlice = createSlice({
    name: "booking",
    initialState: {
        serviceData: [],
        bookingTimings: {
            serviceTiming: '',
            startDate: '',
        },
        totalPrice: 0,
    },
    reducers: {
        addBooking: (state, action) => {
            state.serviceData.push(action.payload.serviceData);
            state.bookingTimings = action.payload.bookingTimings;
        },
        resetBooking: (state) => {
            state.serviceData = [];
            state.bookingTimings = {};
        }
    }
});

export const { addBooking, resetBooking } = bookingSlice.actions;
export default bookingSlice.reducer;