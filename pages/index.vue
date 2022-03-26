<template>
  <div>
    <div v-if="$apollo.loading">
      <h1>Loading...</h1>
    </div>
    <div v-else class=" col-md-12">
      <div class="col-md-12 row">
        <div class="col-md-8 white-card card latest-blog-container">
          <div class="latest-blog-image">
                      <img
            :src="`${blogPosts.data[0].attributes.imageLink}`"
            class=" "
            :alt="`${blogPosts.data[0].attributes.title}`"
          />
          </div>

          <div class="latest-blog-text">
            <a target="_blank" :href="`blog/${blogPosts.data[0].id}`">
            {{blogPosts.data[0].attributes.title}}
            </a>
          </div>
          </div>
          <div class="col-md-3"></div>
      </div>
      <div class="blog-list">
        <div class="col-md-12 row">
<div class="mw-limited row col-md-8">
          <div
            class="white-card col-md-12"
            v-for="blogPost in blogPosts.data"
            v-bind:key="blogPost.id"
          >
        <div class="row col-md-12">
          <img
            :src="`${blogPost.attributes.imageLink}`"
            class="list-img img-fluid col-md-6"
            :alt="`${blogPost.attributes.title}`"
          />
          <div class="card-body col-md-6">
            <p class="category">{{ blogPost.attributes.category }}</p>
            <a target="_blank" :href="`blog/${blogPost.id}`">
              <h2>{{ blogPost.attributes.title }}</h2>
            </a>
            <p style>{{ blogPost.attributes.summary }}</p>
            <div class>Author: {{ blogPost.attributes.author || 'Florante Rapio' }}</div>
            <div class>Created At: {{ blogPost.attributes.publishedAt }}</div>
          </div>
        </div>
      </div></div>
      <div class="col-md-4"></div>
        </div>


      </div>

    </div>
  </div>
</template>
<style scoped>
.card-body > a {
  color: inherit;
}
.latest-blog {
  display:flex;
    align-items: center;
  justify-content: center;

}
.blog-list {
  display: flex;
  justify-content: center;
  align-items: center;
}
.mw-limited {
  max-width: 942px;
}
.latest-blog-container {
  position: relative;
}

.latest-blog-text > a {
  color: inherit;
  font-size: 1.5rem;

}
.latest-blog-image > img {
  max-width: 100%;
  width: 900px;
}
.list-img {
  max-width: 95%;
}
.latest-news {
  display: flex;
}
.card-body {
}
.white-card {
  background-color: white;
  margin: 10px 10px;
  padding: 20px;
}

.card {
  display: flex;
}
.latest-blog-text {
  position: relative;
}
@media only screen and (min-width: 992px) {
  .latest-blog {
    margin-left: 20px;
  }
  .latest-blog-text > a {
  color: white;
  background-color: black;
  font-size: 1.5rem;
  text-decoration: underline;
}
.latest-blog-text {
  position: absolute;
  bottom: 30px;
  left: 2vw;
}
}
</style>
<script>
import gql from 'graphql-tag'
//import { blogsQuery } from '~graphql/query'

export default {
  data() {
    return {
      pageNumber: 1
    }
  },
  apollo: {
    blogPosts: {
      preFetch: true,

      query: gql`query GET_BLOG_POSTS($pageNumber: Int!) {
        blogPosts(pagination:{page: $pageNumber, pageSize: 3}, sort: "id:DESC") {
          meta{
            pagination{
              pageCount
            }
          }
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
