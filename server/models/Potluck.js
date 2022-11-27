const { Schema, model } = require('mongoose');
const commentSchema = require('./Comment');
const itemSchema = require('./Item');

// Schema to create Potluck model
const potluckSchema = new Schema(
    {
        potluckName: {
            type: String,
            unique: true,
            required: true,
        },
        potluckAddress: {
            type: String, 
            unique: true, 
            required: true,
        },
        potluckDate: {
           //add type etc.
        },
        items: [itemSchema],
        comments: [commentSchema],
    
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);
potluckSchema
    .virtual('friendCount')
    // Getter
    .get(function () {
        return this.friends.length;
    })

const Potluck = model('potluck', potluckSchema);

module.exports = Potluck;
