const { Schema, model } = require('mongoose');

const roleSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
    },
    icon: {
        type: String,
    },
    createdBy: { type: Schema.Types.ObjectId, ref: 'Admin' },
}, {
    timestamps: true
});

module.exports = model('Role', roleSchema);