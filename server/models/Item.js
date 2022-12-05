
const { Schema, Types } = require('mongoose');

const itemSchema = new Schema(
    {   
        itemName: {
            type: String, 
            required: true
        },

        itemDescription: {
            type: String,
            required: true,
            maxlength: 200
        },

        username: {
            type: String,
            required: true,
        },
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }
);

module.exports = itemSchema;

