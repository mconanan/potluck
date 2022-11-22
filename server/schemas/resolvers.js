const { AuthenticationError } = require('apollo-server-express');
const { User, Comment } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {

        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id }).populate('comments');
            }
            throw new AuthenticationError('You need to be logged in!');
        },
    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('No user found with this email address');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return { token, user };
        },
        saveComment: async (parent, body, context) => {

            if (context.user) {
                console.log('body', body);
                const updatedUser = await Comment.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { savedComments: body.newComment } },
                    { new: true, runValidators: true }
                );
                return updatedUser;
            }
            throw new AuthenticationError('You need to be logged in!');
        },

        removComment: async (parent, { commentId }, context) => {
            if (context.user) {

                const updatedUser = await Comment.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { savedCommentss: { commentId: commentId } } },
                    { new: true }
                );

                if (!updatedUser) {
                    throw new Error('could not find user!');
                }
                return updatedUser;

            }
            throw new AuthenticationError('You need to be logged in!');
        },

    },
};

module.exports = resolvers;
