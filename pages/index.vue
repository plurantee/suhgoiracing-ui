<template>
  <div>
    <h1>Some Content</h1>
    <p>About contents here</p>
    <h1>Latest News</h1>
    <div v-if="$apollo.loading">
      <h1>Loading...</h1>
    </div>
    <div v-else class="latest-news row col-md-12">
      <div
        class="white-card card col-md-12"
        v-for="blogPost in blogPosts.data"
        v-bind:key="blogPost.id"
      >
        <div class="row col-md-12">
          <img
            :src="`${blogPost.attributes.imageLink}`"
            class="img-fluid col-md-3"
            :alt="`${blogPost.attributes.title}`"
          />
          <div class="card-body col-md-9">
            <p>{{ blogPost.attributes.category }}</p>
            <NuxtLink :to="`blog/${blogPost.id}`">
              <h2>{{ blogPost.attributes.title }}</h2>
            </NuxtLink>
            <p style>{{ blogPost.attributes.summary }}</p>
            <div class>Author: {{ blogPost.attributes.author || 'Florante Rapio' }}</div>
            <div class>Created At: {{ blogPost.attributes.publishedAt }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.latest-news {
  display: flex;
}
.card-body {
}
.white-card {
  background-color: white;
  box-shadow: 10px 5px 5px 5px rgba(68, 68, 68, 0.2);
  margin: 10px 10px;
  padding: 20px;
}

.card {
  display: flex;
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
              author
              views
              category
              publishedAt
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
