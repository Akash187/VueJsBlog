<template>
  <div>
    <ListBlogs/>
  </div>
</template>

<script>
import AddBlog from './components/AddBlog';
import ShowBlog from './components/ShowBlog';
import ListBlogs from './components/ListBlogs';

export default {
  name: 'app',
  components: {
    AddBlog,
    ShowBlog,
    ListBlogs
  },
  data(){
    return {

    }
  },
  methods:{

  }
}
</script>

<style>
  body{
    margin: 0;
    font-family: 'Nunito SemiBold',serif;
  }
</style>
