import mongoose from 'mongoose';


const connectDB = async (url) => {
  mongoose.set('strictQuery', true);
  await mongoose.connect(url).then(() => console.log('connected to mongo'));
};

export default connectDB;
