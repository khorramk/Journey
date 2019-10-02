<template>
    <div>
        <Nav/>
        <h1>this is dashboard</h1>
        <Posts/>
        <AddButton/>
        <form v-on:submit.prevent="logout">
            <input type="submit" value="log out">
        
        </form>
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
        mounted () {
            //axios.get('').then((resp)=> console.log(resp.data));
        },
    }
</script>

<style lang="scss" scoped>

</style>