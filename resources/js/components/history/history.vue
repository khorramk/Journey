<template>
    <div>
      <Nav/>
      <main>
          <Avatar/>
          <Search/>
          <div class="posts-container">
             <li v-for="(posts, i) in this.$store.state.Posts.usersPosts" :key="i">
                 <div class="card">
                     {{posts}}
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

    }
</script>

<style lang="scss" scoped>

</style>
