import { gql } from "apollo-boost";

export const PLACES = gql`
  query {
    families {
      id
      title
      atWar
    }
  }
`;

export const SEND_AT_WAR = gql`
  mutation($familyId: ID!) {
    sendToWar(familyId: $familyId) {
      id
      title
      atWar
    }
  }
`;
