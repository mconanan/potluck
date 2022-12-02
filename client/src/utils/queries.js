import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query me {
     me {
      _id
      username
      potlucks {
        _id
        potluckName
      }
    }
  }
`;

export const QUERY_SINGLE_POTLUCK = gql`
  query getSinglePotluck($potluckId: ID!) {
    potluck(potluckId: $potluckId) {
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
`;