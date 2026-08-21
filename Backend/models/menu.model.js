const mongoose =  require("mongoose");

const menuItemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      default: "",
    },
    isVeg: {
      type: Boolean,
      default: false,
    },
  },
  { _id: true }
);

const categorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    items: [menuItemSchema],
  },
  { _id: true }
);

const menuSchema = new mongoose.Schema(
  {
    restaurantId: {
      type: String,
      required: true,
      unique: true,
    },
    categories: [categorySchema],
  },
  { timestamps: true }
);

const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;