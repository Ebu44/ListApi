const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ListCart = new Schema({
  id: {
    type: Schema.Types.ObjectId,
  },
  name: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("ListCart", ListCart);
