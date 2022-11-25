const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'valid email pleasa']
        },
        password: {
            type: String,
            required: true,
            minlength: 5,
        },
        potlucks: [
            {
                type: Schema.Types.ObjectId,
                ref: 'potluck'
            }
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);
userSchema
    .virtual('friendCount')
    // Getter
    .get(function () {
        return this.friends.length;
    })

const User = model('user', userSchema);

module.exports = User;
