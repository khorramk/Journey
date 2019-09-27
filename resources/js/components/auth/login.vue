<template>
    <div class="container">
        <form v-on:submit.prevent="login">
            <input type="text" v-model="user">
            <input type="text" v-model="password" id="">
            <input type="submit" value="log in">
        </form>
        <router-link to="/register">register</router-link>
   
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: '',
                password: '',
                hasPermits: false
            }
        },
        methods: {
            login() {
                axios.post('/api/login', {
                    user: this.$data.user,
                    password:this.$data.password,
                    timeout: 5000
                })
                     .then((resp)=> {

                        if(resp.data.passed === "passed"){
                            this.$data.hasPermits = true
                             return this.$router.push({name: 'dashboard'});
                        }
                     })
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>