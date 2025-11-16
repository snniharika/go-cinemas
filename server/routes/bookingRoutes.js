import express from 'express';
import { createBooking, getOccupiedSeats, getMyBookings, getAllBookings, getBookingsByUser } from '../controllers/bookingController.js';

const bookingRouter = express.Router();

bookingRouter.post('/create', createBooking);
bookingRouter.get('/seats/:showId', getOccupiedSeats);
bookingRouter.get('/my', getMyBookings);
// dev only: list all bookings
bookingRouter.get('/debug-all', getAllBookings);
// dev only: get bookings for a specific user id
bookingRouter.get('/user/:id', getBookingsByUser);

export default bookingRouter;
