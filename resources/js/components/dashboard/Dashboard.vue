<template>
    <div class="dashboard-container">
      
        <Nav />
        <div class="user-info-container bg-wood" v-if="$store.state.comment.Modal === false && $store.state.Posts.openPostsModal === false">
            <!-- <Avatar/> -->
            <div v-for="(post, i) in $store.state.Posts.allPosts" :key="i">
                 <Posts  :post="post"/>
            </div>

            <AddButton/>
        </div>
          <!-- <Avatar/> -->
        <CommentModal v-if="$store.state.comment.Modal === true"/>
        <PostsModal v-if="$store.state.Posts.openPostsModal === true && $store.state.closeButton.close === false"/>
    </div>
</template>

<script>
import Posts from '../Posts/Posts';
import Avatar from '../dashboard/Avatar';
import Nav from '../Nav';
import AddButton from '../Visited/AddButton';
import PostsModal from '../PostsModal';
import CommentModal from '../CommentsBlock/CommentModal';
    export default {
        methods: {
            logout() {
                axios.post('/logout').then(()=> window.location.href = '/');
            }
        },
        components: {
            Posts,
            Avatar,
            Nav,
            AddButton,
            PostsModal,
            CommentModal,
        },
        mounted () {
             axios.get('/api/posts').then((resp) => {
                console.log(resp.data);
                this.$store.dispatch('getUserPosts', resp.data.loadUsersPosts);
                this.$store.dispatch('getAllPosts', resp.data.allPosts);
                this.$store.dispatch('enableButton');
                });
        },
        data() {
            return {
                likes: 0,
                disable: ''
            }
        },

    }
</script>
<style lang="scss" scoped>
    @mixin dashboard-size{
        height: 100%;
        width: 100%;
    }
    @mixin dashboard-vis{
        background: rgb(66, 51, 51);

    }
    .bg-wood{
        background-color: #6F6868;
    }
</style>

