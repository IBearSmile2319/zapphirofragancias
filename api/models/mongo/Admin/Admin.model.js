const { Schema, model } = require('mongoose');

const adminSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    online: { 
        type: Boolean,
        default: false
    },
    avatar: {
        type: String,
    },
    role: { type: Schema.Types.ObjectId, ref: 'Role' },
    createdBy: { type: Schema.Types.ObjectId, ref: 'Admin' },
}, {
    timestamps: true
});

//revisar estos datos  encripto 
adminSchema.methods.toJSON = function () {
    const { __v, _id, password, ...object } = this.toObject()
    object.uid = _id
    return object
}

module.exports = model('Admin', adminSchema);