import gql from 'graphql-tag'

export const blogsQuery = gql `query {
  blogPosts(pagination:{page: 2, pageSize: 3}) {
    data {
      id
      attributes {
        title
        summary
        imageLink
      }
    }
  }
}`
