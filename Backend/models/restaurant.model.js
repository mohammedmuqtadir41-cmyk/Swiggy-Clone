const mongoose = require("mongoose")

const restaurantSchema = new mongoose.Schema(
    {
        restaurandId : {
            type: String,
            required: true,
            unique: true
        },
        name: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        locality: {
            type: String,
            required: true,
        },
        areaName: {
            type: String,
            required: true,     
        },
        cuisines: [
            {
                type: String,
            },
        ],

        rating: {
            type: Number,
            default: 0,
        },
        costForTwo: {
      type: Number,
      required: true,
    },

    deliveryTime: {
      type: Number,
      required: true,
    },

    veg: {
      type: Boolean,
      default: false,
    },

    isOpen: {
      type: Boolean,
      default: true,
    },

    offer: {
      header: String,
      subHeader: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Restaurant", restaurantSchema);