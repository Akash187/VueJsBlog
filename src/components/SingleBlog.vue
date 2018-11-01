<template>
  <div id="single-blog">
    <h1>{{blog.title}}</h1>
    <article>{{blog.content}}</article>
    <p>Author: {{blog.author}}</p>
    <p>Categories :-</p>
    <ul>
      <li v-for="category in blog.categories">
        {{category}}
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: "SingleBlog",
    data(){
      return{
        id: this.$route.params.id,
        blog:{}
      }
    },
    async created() {
      try {
        const response = await axios.get(`https://vueblog-41061.firebaseio.com/posts/` + this.id+ '.json');
        this.blog = response.data;
      } catch (e) {
        Console.log(e);
      }
    }
  }
</script>

<style scoped>
  #single-blog{
    max-width: 960px;
    margin: 0 auto;
  }
</style>