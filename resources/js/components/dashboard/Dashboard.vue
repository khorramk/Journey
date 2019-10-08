<template>
    <div class="dashboard-container h-screen bg-wood">
        <Nav />
        <div class="user-info-container bg-wood h-full-viewport" v-if="this.$store.state.Modal.open === false">
            <Avatar/>
            <h1>this is dashboard</h1>
            <Posts :posts="this.$store.state.Posts.allPosts"/>
            <AddButton/>
        </div>
        <Modal v-if="this.$store.state.Modal.open && this.$store.state.Modal.close === false"/>
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

