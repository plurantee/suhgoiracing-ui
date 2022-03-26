<template>
  <div>
          <div class="blog-list">
        <div class="mw-limited row col-md-12">              <div
        class="white-card  card col-md-12"
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
            <p>{{ blogPost.attributes.category }}</p>
            <NuxtLink :to="`blog/${blogPost.id}`">
              <h2>{{ blogPost.attributes.title }}</h2>
            </NuxtLink>
            <p style>{{ blogPost.attributes.summary }}</p>
            <div class>Author: {{ blogPost.attributes.author || 'Florante Rapio' }}</div>
            <div class>Created At: {{ blogPost.attributes.publishedAt }}</div>
          </div>
        </div>
      </div></div>

      </div>
    <div v-if="!$apollo.loading" class="page-info">
      <button
        v-bind:disabled="pageNumber < 2"
        class="btn page-button"
        v-on:click="previousPage()"
      >&lt;</button>
      {{ pageNumber }}
      <button
        v-bind:disabled="pageNumber >= blogPosts.meta.pagination.pageCount"
        class="btn page-button"
        v-on:click="nextPage(blogPosts.data)"
      >&gt;</button>
    </div>
  </div>
</template>
<style scoped>
.list-img {
  max-width: 95%;
}
.blog-list {
  display: flex;
  justify-content: center;
  align-items: center;
}
.mw-limited {
  max-width: 1000px;
}
.display-none {
  display: none;
}
.page-button {
  border-color: black;
  margin-left: 30px;
  margin-right: 30px;
}
.page-info {
  margin: 15px 40px;
  display: flex;
  justify-content: center;
}
.latest-news {
  display: flex;
  justify-content: center;
}
.white-card {
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
  head: {
    title: 'Latest | SUHGOI',
  },
  data() {
    return {
      pageNumber: 1,
      count: 0,
    }
  },
  methods: {
    nextPage() {
      this.pageNumber++;
    },
    previousPage(blogPosts) {
      if (this.pageNumber > 0) {
        this.pageNumber--;
      }
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
