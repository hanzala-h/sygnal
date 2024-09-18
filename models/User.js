import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  activeStatus: {
    type: Boolean,
    default: true,
  },
  joinedAt: {
    type: Date,
    default: Date.now(),
  },
  profilePicture: { type: Buffer }
});

const User = mongoose.model('user', userSchema);

export default User;
