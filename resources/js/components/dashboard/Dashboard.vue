<template>
<<<<<<< HEAD
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
=======
    <div class="dashboard-container h-screen bg-wood">
        <Nav />
        <div class="user-info-container bg-wood h-full-viewport" v-if="this.$store.state.Modal.open === false">
            <Avatar/>
            <h1>this is dashboard</h1>
            <Posts :posts="this.$store.state.Posts.allPosts"/>
            <AddButton/>
        </div>
        <Modal v-if="this.$store.state.Modal.open && this.$store.state.Modal.close === false"/>
>>>>>>> parent of 0c12f6d... fixed add btn layout and  visual design and fixed modal for avatar
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
<<<<<<< HEAD
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
=======
>>>>>>> parent of 0c12f6d... fixed add btn layout and  visual design and fixed modal for avatar

