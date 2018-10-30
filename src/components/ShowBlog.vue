<template>
  <div id="show-blogs">
    <h1>All Blog Articles</h1>
    <input type="text" v-model="search" placeholder="search blogs">
    <div v-for="post in filteredBlogs" class="single-blog">
      <h2 v-rainbow>{{post.title | toUppercase}}</h2>
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
        posts: [],
        search: ''
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
    },
    computed: {
      filteredBlogs: function () {
        return this.posts.filter((blog) => {
          return blog.title.match(this.search);
        });
      }
    },
    filters: {
      toUppercase(value) {
        return value.toUpperCase();
      }
    },
    directives: {
      'rainbow': {
        bind(el, binding, vnode){
          el.style.color = "#" + Math.random().toString().slice(2,8);
        }
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

  input {
    width: 96%;
    margin-left: 1%;
    height: 30px;
    font-size: 16px;
    padding-left: 5px;
  }
</style>