<template>
    <div class="dashboard-container h-screen bg-wood">
        <Nav />

        <div class="user-info-container w-2/3 bg-wood">
            <Avatar/>
            <h1>this is dashboard</h1>
            <Posts/>
            <AddButton/>
        </div>
    </div>
</template>

<script>
import Posts from '../Posts/Posts';
import Avatar from '../dashboard/Avatar';
import Nav from '../Nav';
import AddButton from '../Visited/AddButton';
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
            AddButton
        },

    }
</script>

