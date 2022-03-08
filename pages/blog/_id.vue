<template>
  <div>
    <div v-if="$apollo.loading">
      <h1>Loading...</h1>
    </div>
    <div v-else>
      <h1>{{ blogPost.data.attributes.title }}</h1>
      <h2>{{ blogPost.data.attributes.summary }}</h2>
      <p class="wh-pre-wrap">{{ blogPost.data.attributes.body }}</p>
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
.wh-pre-wrap {
  white-space: pre-wrap;
}
</style>
<script>
import gql from 'graphql-tag'
//import { blogsQuery } from '~graphql/query'

export default {
  head: {
    title: 'Suhghoi Racing - View Blog',
  },
  data() {
    return {
      blogId: this.$route.params.id,
    }
  },
  methods: {
  },
  apollo: {
    blogPost: {
      preFetch: true,

      query: gql`query GET_BLOG_POST($blogId: ID!){
        blogPost(id: $blogId){
          data{
            attributes {
              title
              summary
              body
            }
          }
        }
      }`,
      variables() {
        return { blogId: this.blogId }
      }
    }
  }
}
</script>
