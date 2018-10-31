<template>
  <div id="single-blog">
    <h1>{{blog.title}}</h1>
    <article>{{blog.body}}</article>
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
        const response = await axios.get(`http://jsonplaceholder.typicode.com/posts/` + this.id);
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