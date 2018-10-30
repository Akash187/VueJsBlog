<template>
  <div id="show-blogs">
    <h1>All Blog Articles</h1>
    <div v-for="post in posts" class="single-blog">
      <h2 v-rainbow>{{post.title | to-uppercase}}</h2>
      <article>{{post.body | snippet}}</article>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: "ShowBlog",
    data() {
      return {
        posts: {}
      }
    },
    methods: {},
    async created() {
      try {
        const response = await axios.get(`http://jsonplaceholder.typicode.com/posts`);
        this.posts = response.data;
      } catch (e) {
        Console.log(e);
      }
    }
  }
</script>

<style scoped>
  #show-blogs{
    max-width: 800px;
    margin: 0 auto;
  }

  .single-blog {
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
  }
</style>