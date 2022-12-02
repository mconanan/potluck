const { AuthenticationError } = require('apollo-server-express');
const { User, Potluck } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        //req.body = args 
        me: async (_parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id }).populate('potlucks');
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        potluck: async (parent, { potluckId }) => {
            return Potluck.findOne({ _id: potluckId });
        },
    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            console.log("user", user)
            const token = signToken(user);
            console.log("token", token)
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('No user found with this email address');
            }

            const correctPw = await user.isCorrectPassword(password);
            console.log("user", user)
            console.log("correctPw", correctPw)

            // if (!correctPw) {
            //     throw new AuthenticationError('Incorrect credentials');
            // }

            const token = signToken(user);

            return { token, user };
        },
        addPotluck: async (parent, { potluckName }, context) => {
            if (context.user) {

                const createPotluck = await Potluck.create({
                    potluckName,
                    // potluckAddress,
                    // potluckDate,
                    // username: context.user.username,
                });

                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { potlucks: createPotluck._id } }
                )
            return createPotluck
            }
            throw new AuthenticationError('Something went wrong while creating your Potluck, please make sure you answer all questions on the form.');
        },
   
        addItem: //update potluck to add item
            async function (parent, { potluckId, itemName, itemDescription }, context) {
                if (context.user) {


                    //need potluck id
                    return Potluck.findOneAndUpdate(
                        { _id: potluckId },
                        { $addToSet: { 
                            items: { itemName, itemDescription, username: context.user.username } 
                            }, 
                        },
                        {
                            new: true,
                            runValidators: true,
                        }
                    );
                }
                throw new AuthenticationError('Something went wrong while creating your Potluck, please make sure you answer all questions on the form.');
            },
        addComment: //update potluck to add comment
            async function (parent, args, context) {
                if (context.user) {

                    //need potluck id
                    const potluck = await Potluck.findOneAndUpdate(
                        { _id: args.potluck_id },
                        { $addToSet: { comments: { commentText: args.commentText, username: args.username } } }
                    )
                    return potluck
                }
                throw new AuthenticationError('Something went wrong while creating your Potluck, please make sure you answer all questions on the form.');
            },
        addFriends:
            async function (parent, args, context) {
                if (context.user) {

                    const friend = await User.findOne(
                        { username: args.username },
                    )

                    const user = await User.findOneAndUpdate({
                        _id: context.user._id,

                    }, { $addToSet: { friends: friend._id } });



                    return user
                    //not functionald

                }
                throw new AuthenticationError('Something went wrong while creating your Potluck, please make sure you answer all questions on the form.');

            }
        ,
    }
};

module.exports = resolvers;
