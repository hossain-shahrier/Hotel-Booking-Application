import Hotel from "../models/Hotel.js";
// Create
export const CreateHotelController = async (req, res, next) => {
  const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    next(err);
  }
};
// Update
export const UpdateHotelController = async (req, res, next) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (err) {
    next(err);
  }
};
// delete
export const DeleteHotelController = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel has been deleted");
  } catch (err) {
    next(err);
  }
};
// deleteAll
export const DeleteAllHotelsController = async (req, res, next) => {
  try {
    await Hotel.deleteMany();
    res.status(200).json("Hotels have been deleted");
  } catch (err) {
    next(err);
  }
};
// get
export const GetHotelController = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (err) {
    next(err);
  }
};
// getAll
export const GetAllHotelsController = async (req, res, next) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (err) {
    next(err);
  }
};
