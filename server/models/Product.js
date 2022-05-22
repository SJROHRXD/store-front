const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    reuired: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  categories: [
    {
      type: Schema.Types.ObjectId,
      ref: category,
    },
    {
      name: {
        type: String,
        required: true,
      },
    },
  ],
  keywords: [{ type: String }],
});

module.exports = Product = mongoose.model('product', ProductSchema);
