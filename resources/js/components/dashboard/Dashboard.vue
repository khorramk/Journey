<template>
    <div>
        <h1>this is dashboard</h1>
        <form v-on:submit.prevent="logout">
            <input type="submit" value="log out">
        
        </form>
    </div>
</template>

<script>
    export default {
        methods: {
            logout() {
                axios.post('/logout').then(()=> window.location.href = '/');
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>