import { gql } from 'apollo-boost';

export default gql`query GetPosts {
      posts {
        title
        content
        author {
        name
        }
    }
  }`;