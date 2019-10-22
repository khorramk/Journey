<template>
    <div>
        <Comments/>
        <div class="add-comment-block">
            <button @click="$store.dispatch('closeCommentModal')">(x)</button>
            <form v-on:submit.prevent="submit">
                <textarea name="commentbody" v-model="text" id="" cols="30" rows="10"></textarea>
                <button type="submit">submit</button>
            </form>
        </div>

    </div>
</template>

<script>
import Comments from './Comments';
    export default {
        data() {
            return {
                text: ''
            }
        },
        methods: {
            submit() {
                axios.post('api/comments', {
                    comments: this.$data.text,
                      postID: this.$store.state.comment.postID
                }).then(()=> {
                    this.$store.dispatch('closeCommentModal')

                });
            }
        },
        components: {
            Comments,
        },

    }
</script>

<style lang="scss" scoped>
    @mixin comment-block_size{
        width: 100vw;
        height: 100vh;
    }
    @mixin comment-block_vis{
        background: brown;
    }
    .comment-block{
        @include comment-block_size();
        @include comment-block_vis();
    }
</style>
