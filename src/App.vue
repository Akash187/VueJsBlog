<template>
  <div>
    <AddBlog/>
  </div>
</template>

<script>
import AddBlog from './components/AddBlog'

export default {
  name: 'app',
  components: {
    AddBlog
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
