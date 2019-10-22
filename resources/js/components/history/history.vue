<template>
    <div class="bg-wood h-full-viewport">
      <Nav/>
      <main>
          <!-- <Avatar/> -->
          <Search/>
          <div class="posts-container" v-for="(post, i) in historyOfPosts" :key="i">

             <Posts :post="post" :disable="true"/>
             <Comment v-if="$store.state.comment.addComments" :commentsHistory="pastComments"/>

          </div>
      </main>
    </div>
</template>

<script>
import Avatar from '../dashboard/Avatar';
import Search from '../search/Search';
import Posts from '../Posts/Posts';
import Comments from '../CommentsBlock/Comments';
import Nav from '../Nav';
    export default {
        components: {
            Avatar,
            Search,
            Nav,
            Posts,
            Comments,
        },
        data() {
            return {
                historyOfPosts: ''
            }
        },
        mounted () {
            axios.get('/api/posts').then((resp)=> {
                console.log(resp);
               this.$data.historyOfPosts = resp.data['users-posts'];
            })
        },

    }
</script>

<style lang="scss" scoped>

</style>
