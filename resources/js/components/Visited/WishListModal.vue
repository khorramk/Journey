<template>
    <div class="container">
        <div class="row">
           <select name="" id="">

           </select>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                country: value
            }
        },
        methods: {
            submit() {
                axios.post('/api/wishList').then();
            }
        },
        mounted () {
            axios.get('https://restcountries.eu/rest/v2/all').then((resp)=> console.log(resp.data));
        },
    }
</script>

<style lang="scss" scoped>

</style>
