<template>
  <div>
    <ShowBlog/>
  </div>
</template>

<script>
import AddBlog from './components/AddBlog';
import ShowBlog from './components/ShowBlog';

export default {
  name: 'app',
  components: {
    AddBlog,
    ShowBlog
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
