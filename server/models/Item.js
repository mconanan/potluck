
const { Schema, Types } = require('mongoose');

const itemSchema = new Schema(
    {
        itemId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
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

