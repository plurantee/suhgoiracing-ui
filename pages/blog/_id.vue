<template lang="md">
  <div>
    <div v-if="$apollo.loading">
      <h1>Loading...</h1>
    </div>
    <div v-else class="article">
      <div class="image-head">
        <img class="img-fluid" :src="`${blogPost.data.attributes.imageLink}`" />
      </div>
      <div class="article-body">
        <h3>{{ blogPost.data.attributes.title }}</h3>
        <div class="" v-html="$md.render(blogPost.data.attributes.body)"></div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.article-body {
  max-width: 1600px;
  margin: 30px 30px;
}
.article {
  margin-top: 2vh;
}
.image-head {
  display: flex;
  justify-content: center;
}
.image-head > img {
  width: 1000px;
}
.wh-pre-wrap {
  white-space: pre-wrap;
}
</style>
<script>
import gql from 'graphql-tag'
//import { blogsQuery } from '~graphql/query'

export default {
  head() {
    return {
      title: 'Suhghoi Racing - ' + this.blogPost?.data?.attributes?.title,
    }
  },
  data() {
    return {
      blogId: this.$route.params.id,
    }
  },
  methods: {
    toHtml(body) {
      return body;
    }
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
              imageLink
              author
              views
              body
              category
              publishedAt
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
