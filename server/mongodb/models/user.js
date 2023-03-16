import mongoose from 'mongoose';

const User = new mongoose.Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  profileImg: { type: String, required: false },
  timestamp: { type: Date, default: Date.now },
});

const UserSchema = mongoose.model('User', User);

export default UserSchema;