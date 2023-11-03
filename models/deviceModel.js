const mongoose = require('mongoose')

const deviceSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter a device name"],
            unique: true
        },
        quantity: {
            type: Number,
            required: true,
            default: 0
        },
        price: {
            type: Number,
            required: true,
        },
        image: {
            type: String,
            required: false,
        }
    },
    {
        timestamps: true
    }
)


const Device = mongoose.model('Device', deviceSchema);

module.exports = Device;
