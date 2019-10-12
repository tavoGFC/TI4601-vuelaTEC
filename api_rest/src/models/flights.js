import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const FlightSchema = new Schema({
  _id: String,
  name: String,
  departure: String,
  arrives: String,
  origin: String,
  destination: String,
  price: String,
  restrictions: [String],
  services: [String],
  state: String,
  capacity: Number,
  airline_id: String
});

export default mongoose.model('Flights', FlightSchema);