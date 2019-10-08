<template>
    <div>

        <li v-for="(ListOfPost, i) in []" :key="i" v-text="ListOfPost.posts">
               <div class="w-full border-black h-1/2x">

               </div>
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
            axios.get('/api/posts').then((resp) => {
                console.log(resp.data);
                this.$store.dispatch('getUserPosts', resp.data.loadUsersPosts);
                this.$store.dispatch('getAllPosts', resp.data.allPosts)
            });
        },
    }
</script>

<style lang="scss" scoped>

</style>
