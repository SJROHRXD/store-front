const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  shippingAddress: [
    {
      street: String,
      required: true,
    },
    {
      city: String,
      required: true,
    },
    {
      state: String,
      required: true,
    },
    {
      zipcode: Number,
      required: true,
    },
  ],
  billingAddress: [
    {
      street: String,
      required: true,
    },
    {
      city: String,
      required: true,
    },
    {
      state: String,
      required: true,
    },
    {
      zipcode: Number,
      required: true,
    },
  ],
  wishList: [
    {
      product: {
        type: Schema.Types.ObjectId,
        ref: product,
      },
      name: {
        type: String,
        required: true,
      },
      price: {
        type: String,
        required: true,
      },
    },
  ],
});

module.exports = User = mongoose.model('user', UserSchema);
