<template>
    <div>
      <Nav/>
      <main>
          <Avatar/>
          <Search/>
          <div class="posts-container">
             <li v-for="(historyOfPost, i) in historyOfPosts" :key="i">
                 <div class="card">
                     {{historyOfPost}}
                 </div>
             </li>
          </div>
      </main>
    </div>
</template>

<script>
import Avatar from '../dashboard/Avatar';
import Search from '../search/Search';
import Posts from '../Posts/Posts';
import Nav from '../Nav';
    export default {
        components: {
            Avatar,
            Search,
            Nav
        },
        data() {
            return {
                historyOfPosts: Array(9).fill('test')
            }
        },
        mounted () {
            axios.get(`/api/posts/{}`).then((resp)=> this.$data.historyOfPosts = resp.data);
        },
    }
</script>

<style lang="scss" scoped>

</style>