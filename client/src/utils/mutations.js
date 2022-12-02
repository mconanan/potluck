import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_POTLUCK = gql `
mutation addPotluck ($potluckName: String!) {
  addPotluck(potluckName: $potluckName) {
      _id
      potluckName
  }
}
`;

export const ADD_ITEM = gql `
mutation addItem($potluckId: ID!, $itemName: String!, $itemDescription: String!) {
  addItem(potluckId: $potluckId, itemName: $itemName, itemDescription: $itemDescription) {
    _id
    potluckName
    items {
      itemId
      itemName
      itemDescription
      username
    }
  }
}
`