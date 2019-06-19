import { gql } from 'apollo-boost';

export default gql`query GetPost {
      post(where: {id: "cjx2gytja000h08533uu2k0gu"}) {
        title
        content
        author {
        name
        }
    }
  }`;