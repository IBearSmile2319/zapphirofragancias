const { Schema, model } = require('mongoose');

const PointsSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    points: {
        type: Number,
        default: 0
    },
    type: {
        type: String,
        default: "Points"
    },
    assistant: {
        type: Schema.Types.ObjectId,
        ref: 'Admin',
    },
}
, { timestamps: true });

module.exports = model('Points', PointsSchema);