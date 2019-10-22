<template>
    <div>
        <p>
            comments
        </p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
               key : ''
            }
        },
         mounted () {
            axios.get(`/api/comments/${this.$store.state.comment.postID.id}`).then((resp)=> console.log(resp));
        },
    }
</script>

<style lang="scss" scoped>

</style>
