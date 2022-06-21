const { Schema, model } = require('mongoose');

const PointsSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    points: {
        type: Number,
        default: 0
    },
    type: {
        type: String,
        default: "Points"
    }
}
, { timestamps: true });

module.exports = model('Points', PointsSchema);