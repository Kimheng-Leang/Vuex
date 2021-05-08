<template>
  <post v-for="postItem in postlist" :key="postItem.id" :postItem="postItem"/>
</template>

<script>
import post from "./components/post";
export default {
  name: 'App',
  components: {
    post
  },
  computed:{
    postlist(){
      return this.$store.getters.getPosts
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
