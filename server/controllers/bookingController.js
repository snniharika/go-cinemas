import Booking from "../models/Bookings.js";
import Show from "../models/Show.js";

//fn to check availability of desired seat
const checkSeatsAvailability = async (showId, selectedSeats) => {
    try{
        const showData = await Show.findById(showId)
        if(!showData)
            return false;
        const occupiedSeats = showData.occupiedSeats;

        const isSeatTaken = selectedSeats.some(seat => occupiedSeats[seat]);

        return !isSeatTaken;
    } catch(error){
        console.log(error.message);
        return false;
    }
}

//fn to book ticket
export const createBooking = async (req, res) => {
    try{
        const {userId} = req.auth();
        const {showId, selectedSeats} = req.body;
        const { origin } = req.headers;

        //check if seats are available for selected show to book
        const isAvailable = await checkSeatsAvailability(showId, selectedSeats)

        if(!isAvailable){
            return res.json({success: false, message:"selected seats not available"})
        }

        //get show details
        const showData = await Show.findById(showId).populate('movie');
        //book a show
        const booking = await Booking.create({
            user: userId,
            show: showId,
            amount: showData.showPrice * selectedSeats.length,
            bookedSeats: selectedSeats
        })

        //reserving seats
        selectedSeats.map((seat)=>{
            showData.occupiedSeats[seat] = userId;
        })
        showData.markModified('occupiedSeats');

        await showData.save();

        res.json({success: true, message: 'show booked successfully'})

    } catch(error){
        console.log(error.message);
        res.json({success: false, message: error.message})
    }
}

export const getOccupiedSeats = async (req, res) => {
    try{
        const {showId} = req.params;
        const showData = await Show.findById(showId)

        const occupiedSeats = Object.keys(showData.occupiedSeats)

        res.json({success: true, occupiedSeats})

    } catch (error){
        console.log(error.message);
        res.json({success: false, message: error.message})
    }
}

// get bookings for the authenticated user
export const getMyBookings = async (req, res) => {
    try{
        const { userId } = req.auth();

        console.log('getMyBookings called, userId:', userId);

        const bookings = await Booking.find({ user: userId })
            .populate({ path: 'show', populate: { path: 'movie' } });

        console.log(`found ${bookings.length} bookings for user ${userId}`);

        res.json({ success: true, bookings });
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
}

// dev helper: return all bookings (no auth) — remove in production
export const getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.find({}).populate({ path: 'show', populate: { path: 'movie' } });
        res.json({ success: true, bookings });
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
}

// dev helper: get bookings by user id (no auth) — remove in production
export const getBookingsByUser = async (req, res) => {
    try {
        const { id } = req.params;
        const bookings = await Booking.find({ user: id }).populate({ path: 'show', populate: { path: 'movie' } });
        res.json({ success: true, bookings });
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
}