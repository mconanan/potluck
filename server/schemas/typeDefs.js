const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    friendCount: Int
    friends: [User]
     comments:[Comment]
  }
  
  type Comment {
    comentId: ID
    commentText: String
    username: String
    createdAt:String
    reactions:[Reaction]
    
  }
type Reaction {
    reactionId:ID
    reactionBody:String
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
  
    
  

}
`
module.exports = typeDefs;