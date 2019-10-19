<template>
    <div class="dashboard-container bg-wood">
        <Nav />
        <div class="user-info-container dashboard relative" v-if="this.$store.state.Modal.open === false">
            <!-- <Avatar/> -->
            <div class="posts container border border-black border-2">
                <Posts :posts="this.$store.state.Posts.allPosts"/>
            </div>
            <AddButton/>
        </div>
        <Modal v-if="this.$store.state.Modal.open === true &&  this.$store.state.closeButton.close === false"/>
    </div>
</template>

<script>
import Posts from '../Posts/Posts';
import Avatar from '../dashboard/Avatar';
import Nav from '../Nav';
import AddButton from '../Visited/AddButton';
import Modal from '../Modal';
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
            Modal
        },
        mounted () {
             axios.get('/api/posts').then((resp) => {
                console.log(resp.data);
                this.$store.dispatch('getUserPosts', resp.data.loadUsersPosts);
                this.$store.dispatch('getAllPosts', resp.data.allPosts);
                });
        },

    }
</script>
<style lang="scss" scoped>
    @mixin dashboard-size{
        height: calc(100vh - 80px);
        width: 100%;
    }
    @mixin dashboard-vis{
        background: rgb(66, 51, 51);
        overflow-y:initial;
    }
    .dashboard{
        @include dashboard-size();
        @include dashboard-vis();
    }
</style>

