const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    potlucks:[Potluck]
  }

  type Potluck {
    _id: ID
    potluckName: String
    items: [Item]
    comments: [Comment]
  }
  
  type Comment {
    commentId: ID
    commentText: String
    username: String
    createdAt:String
  }

  type Item {
    _id: ID
    itemName: String
    itemDescription: String
    username:String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query{
    me: User
    potluck(potluckId: ID!): Potluck
  }

type Mutation {
  addUser(username: String!, email: String!, password: String!): Auth
  login(email: String!, password: String!): Auth
  addPotluck(potluckName: String!):Potluck
  addFriends(username: String!): User
  addItem(potluckId: ID!, itemName: String! itemDescription: String!): Potluck
  addComment(commentText: String! username:String!): Potluck

}
`
module.exports = typeDefs;