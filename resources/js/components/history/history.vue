<template>
    <div class="bg-wood h-full-viewport">
      <Nav/>
      <main>
          <Avatar/>
          <Search/>
          <div class="posts-container">
             <Posts />
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
            Nav,
            Posts,
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
