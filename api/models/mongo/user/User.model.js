const { Schema, model } = require('mongoose');

const userSchema = new Schema({
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
    nDocument: {
        type: String,
        required: true,
        unique: true
    },
    avatar: {
        type: String,
    },
    phone: {
        type: String,
        required: true,
    },
    points: {
        type: Number,
        default: 0
    },
    status: {
        type: Boolean,
        default: false
        // cambia a true cuando el usuario es verificado
    },
    active: {
        type: Boolean,
        default: false
        // cambia a true cuando el usuario es verificado
    },
    online: {
        type: Boolean,
        default: false
        // cambia a true cuando el usuario esta conectado
    },
    range: { type: Schema.Types.ObjectId, ref: 'Range' },
    promotion: { type: Schema.Types.ObjectId, ref: 'User' },
    afiliates: [{ type: Schema.Types.ObjectId, ref: 'User' }],
}, {
    timestamps: true
});

userSchema.methods.toJSON = function () {
    const { __v, _id, password, ...object } = this.toObject()
    object.uid = _id
    return object
}

module.exports = model('User', userSchema)
