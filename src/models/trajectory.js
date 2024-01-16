const mongoose  = require('mongoose');
const Schema = mongoose.Schema;
const trajectorySchema = new Schema({
    userId: { type: String, required: true },
    user_name: { type: String, required: true},
    user_email: { type: String, required: true},
    user_phone: { type: String, required: true},
    timestamp: { type: Date, default: Date.now },
    coordinates: [
      {
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true },
        altitude: { type: Number },
      }
    ],
})
module.exports = mongoose.model('trajectory', trajectorySchema, 'trajectory', { versionKey: false });