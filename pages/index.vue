<template>
  <div>
    <h1>Some Content</h1>
    <p>About contents here</p>
    <h1>Latest News</h1>
    <div class="latest-news">
      <div class="white-card" v-for="blogPost in blogPosts.data" v-bind:key="blogPost.id">
        <NuxtLink :to="`blog/${blogPost.id}`">
          <h2>{{ blogPost.attributes.title }}</h2>
        </NuxtLink>
        <p>{{ blogPost.attributes.summary }}</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.latest-news {
  display: flex;
}
.white-card {
  width: 25%;
  background-color: white;
  box-shadow: 10px 5px 5px 5px rgba(68, 68, 68, 0.2);
  margin: 10px 10px;
  padding: 20px;
}
</style>
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

      query: gql`query GET_BLOG_POSTS($pageNumber: Int!) {
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
        return { pageNumber: this.pageNumber }
      }
    }
  }
}
</script>
