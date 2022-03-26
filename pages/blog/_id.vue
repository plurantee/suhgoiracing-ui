<template lang="md">
  <div class="container">
    <div v-if="$apollo.loading">
      <h1>Loading...</h1>
    </div>
    <div v-else>
      <div class="article col-md-12 row">      <div class="blog-content col-md-8">
      <h3 class="blog-title">{{ blogPost.data.attributes.title }}</h3>
      <p class="blog-summary">{{ blogPost.data.attributes.summary }}</p>
      <div class="image-head">
        <img class="img-fluid" :src="`${blogPost.data.attributes.imageLink}`" />
      </div>
      <div class="article-body">
        <div class="" v-html="$md.render(blogPost.data.attributes.body)"></div>
      </div>
      <div class="fb-like container" :data-href="`${url}`" data-width="" data-layout="standard" data-action="like" data-size="large" data-share="true"></div>
      </div></div>

    </div>
  </div>
</template>
<style scoped>
.blog-summary {
  color: #666;
  font-weight: 400;
  font-size: 1.2rem;
}
.blog-content {
  margin: 1px 1px;
}
.article-body {
  margin-top: 50px;
  max-width: 1600px;
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
@media only screen and (min-width: 992px) {
.blog-content {
  margin: 30px 30px;
}
}
</style>
<script>
import gql from 'graphql-tag'
//import { blogsQuery } from '~graphql/query'

export default {
  head() {
    return {
      title: this.blogPost?.data?.attributes?.title + " | SUHGOI",
    }
  },
  data() {
    return {
      blogId: this.$route.params.id,
      url: this.$route.path
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
