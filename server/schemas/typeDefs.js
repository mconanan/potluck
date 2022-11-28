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
    potluckAddress: String
    potluckDate: String
    item: [Item]
    comments: [Comment]
  }
  
  type Comment {
    comentId: ID
    commentText: String
    username: String
    createdAt:String
  }

  type Item {
    itemId:ID
    itemName: String
    itemDescription: String
    username:String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query{
    me: User
  }

type Mutation {
  addUser(username: String!, email: String!, password: String!): Auth
  login(email: String!, password: String!): Auth
  addPotluck(potluckName: String!, potluckAddress: String!, potluckDate: String!):Potluck
  addFriends(username: String!): User
  addItem(itemName: String! itemDescription: String!): Potluck
  addComment(commentText: String! username:String!): Potluck
    
    


  
    
  

}
`
module.exports = typeDefs;