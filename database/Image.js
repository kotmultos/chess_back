const {Schema, model} = require("mongoose");

const imageSchema = new Schema({
    caption: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    url: {
        type: String,
        required: true,
        trim: true
    }
}, {timestamps: true, toObject: {virtuals: true}, toJSON: {virtuals: true}});

imageSchema.statics = {
    async createImage(imageObject) {
        return this.create(imageObject);
    }
};

module.exports = model('image', imageSchema);