const { Schema, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const commentSchema = new Schema(
    {
        commentId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },

        commentText: {
            type: String,
            required: true,
            maxlength: 200
        },

        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
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
commentSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
})

module.exports = commentSchema;