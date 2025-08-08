import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      auto: true,
    },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    imageUrl: { type: String, required: true },
    cartItems: { type: Object, default: {} },
  },
  { minimize: false }
);

const User = mongoose.models.user || mongoose.model("user", UserSchema);

export default User;
