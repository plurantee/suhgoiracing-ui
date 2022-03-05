<template>
  <div class="">
    <div class="" v-for="blogPost in blogPosts.data" v-bind:key="blogPost.id">
      {{blogPost.attributes}}
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
//import { blogsQuery } from '~graphql/query'

export default {
  data() {
    return {
      pageNumber: 1,
    }
  },
  apollo: {
    blogPosts: {
      preFetch: true,

      query: gql `query GET_BLOG_POSTS($pageNumber: Int!) {
        blogPosts(pagination:{page: $pageNumber, pageSize: 3}) {
          data {
            id
            attributes {
              title
              summary
              imageLink
            }
          }
        }
      }`,
      variables() {
        return {pageNumber: this.pageNumber}
      }
    }
  }
}
</script>
