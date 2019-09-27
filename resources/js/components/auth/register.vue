<template>
    <form v-on:submit.prevent="register">
        <input type="text" v-model="username">
        <input type="text" v-model="email">
        <input type="text" v-model="password">
        <input type="submit" value="sign in">
    
    </form>
</template>

<script>
    export default {
        data() {
            return {
               username: '',
               email: '',
               password:''
            }
        },
        methods: {
            register() {
                axios.post('/api/register', {
                    user: this.$data.username,
                    email: this.$data.email,
                    password: this.$data.password,
                    timeout: 5000
                }).then(()=> {
                    this.$router.push('/dashboard');
                })
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>