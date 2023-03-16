import mongoose from 'mongoose';


const connectDB = async (url) => {
  console.log(url);
  mongoose.set('strictQuery', true);
  await mongoose.connect(url).then(() => console.log('connected'));
};

export default connectDB;
