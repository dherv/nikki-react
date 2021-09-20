import { gql } from '@apollo/client';

export const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;
export const SIGNUP_MUTATION = gql`
  mutation SignUp($name: String!, $email: String!, $password: String!) {
    signup(name: $name, email: $email, password: $password) {
      token
    }
  }
`;

export const ADD_DAILY_QUERY = gql`
  mutation AddDaily($input: AddDailyInput) {
    addDaily(input: $input) {
      id
      text
      words {
        id
        text
      }
      grammars {
        id
        text
      }
    }
  }
`;

export const ADD_SPOT_MUTATION = gql`
  mutation AddSpot($name: String!) {
    spot(name: $name) {
      spot {
        id
        name
        latitude
        longitude
      }
    }
  }
`;

export const ADD_FOCUS_MUTATION = gql`
  mutation AddFocus($name: String!) {
    focus(name: $name) {
      id
      name
      completed
    }
  }
`;

export const UPDATE_FOCUS_MUTATION = gql`
  mutation UpdateFocus($id: ID!, $name: String!, $completed: Boolean!) {
    updateFocus(id: $id, name: $name, completed: $completed) {
      id
      name
      completed
    }
  }
`;

export const DELETE_FOCUS_MUTATION = gql`
  mutation DeleteFocus($id: String!) {
    deleteFocus(id: $id) {
      id
      name
      completed
    }
  }
`;

export const ADD_SESSION_QUERY = gql`
  mutation AddSession(
    $memo: String!
    $rating: Int!
    $focusId: ID!
    $spotId: ID!
  ) {
    focus(memo: $memo, rating: $rating, focusId: $focusId, spotId: $spotId) {
      id
      rating
      memo
      focus {
        id
        name
      }
      spot {
        id
        name
      }
    }
  }
`;
