<template>
  <div>
    <Header></Header>
    <router-view>/</router-view>
  </div>
</template>

<script>
import AddBlog from './components/AddBlog';
import ShowBlog from './components/ShowBlog';
import ListBlogs from './components/ListBlogs';
import Header from './components/Header';

export default {
  name: 'app',
  components: {
    AddBlog,
    ShowBlog,
    ListBlogs,
    Header
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
