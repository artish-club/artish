import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';

const GetPost = gql`
    query {
      posts {
        title
        content
        author {
        name
        }
    }
  }`;

const Post = graphql(GetPost)(props => {
    const { error, posts } = props.data;
    if (error) {
      return <p>{error}</p>;
    }
    if (posts) {
      return (
            <div>
                {posts.map(post => {
                    return <p key={post.title}>{post.title}</p>;
                })}
                
            </div>);
    }
  
    return <p>Loading...</p>;
  });



export default Post; 