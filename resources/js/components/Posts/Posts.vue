<template>
    <div>
        <li v-for="(ListOfPost, i) in ListOfPosts" :key="i" v-text="ListOfPost">

        </li>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                ListOfPosts: Array(9).fill('test')
            }
        },
        mounted () {
            axios.get('/api/post').then((resp) => {
                this.$data.ListOfPost = resp.data;
            });
        },
    }
</script>

<style lang="scss" scoped>

</style>