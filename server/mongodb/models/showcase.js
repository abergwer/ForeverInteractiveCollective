import mongoose from 'mongoose';

const Showcase = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  area: { type: String, required: true }, // id of the area
  originalPhoto: { type: String, required: true },
  improvedPhoto: { type: String, required: true },
  name: { type: String, required: true },
  shortDescription: String,
  longDescription: String,
  location: String, // description of the location where the photo was taken,
  photoDate: Date,
  uploadDate: { type: Date, default: Date.now },
  peopleNames: {
    type: [ String ],
    required: true,
    default: []
  }
});


const ShowcaseSchema = mongoose.model('Showcase', Showcase);

export default ShowcaseSchema;