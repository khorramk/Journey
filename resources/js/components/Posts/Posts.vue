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
            // axios.get('/api/posts').then((resp) => {
            //     this.$data.ListOfPosts = resp.data;
            // });
        },
    }
</script>

<style lang="scss" scoped>

</style>