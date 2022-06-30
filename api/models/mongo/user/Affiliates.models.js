const { Schema, model } = require('mongoose');

const AffiliatesSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    affiliates: [{
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        date: {
            type: Date,
            default: Date.now,
        },
    }],
    status: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

module.exports = model('Affiliates', AffiliatesSchema);
