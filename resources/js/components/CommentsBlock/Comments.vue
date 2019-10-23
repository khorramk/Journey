<template>
    <div>
        <ul>
            <li class="comments-block overflow-hidden shadow-lg" v-for="(comment, i) in  comments" :key="i">
                <!-- <Avatar/> -->
                    <div class="font-bold text-xl mb-2">
                        {{comment.comment}}
                    </div>

                <div class="px-6 py-4">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>

                </div>
                <form v-on:submit.prevent="submit($props.post.id)">
                    <!-- increments the like -->
                    <button type="submit" @click="liked += 1" disabled="$props.disable">
                        <!-- show the filtred likes upon increment -->
                            <img class="like-btn" src="https://img.icons8.com/pastel-glyph/64/000000/facebook-like.png"/>
                            <span v-text="liked || comment.likes"></span>
                    </button>
                </form>
                <button @click="flashModal($props.post.id)">
                    <img src="https://img.icons8.com/material-two-tone/24/000000/reply-arrow.png">
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
               key : '',
               comments: '',
               liked: ''
            }
        },
         mounted () {
            axios.get(`/api/comments/${this.$store.state.comment.postID.id}`).then((resp)=> this.$data.comments = resp.data.comments);
        },
    }
</script>

<style lang="scss" scoped>
    @mixin posts-block_size{
        height: 300px;
        margin: 20px 0 0 0;

    }
    @mixin posts-block_vis{
        background: white;
        border: 1px solid green;

    }
    .comments-block{
        @include posts-block_size();
        @include posts-block_vis();
        position: relative;
    }
   @mixin like-btn_size{
       width: 50px;
       height: 50px;
       margin: 0 0 0 20px;

   }
    @mixin like-btn_pos{
        right: 0;
        bottom: 0;
        position: absolute;
        z-index: 3;
    }
    .like-btn{
        @include like-btn_size();
        @include like-btn_pos();
    }
    @mixin comment-btn_size{
        width: 50px;
        height: 50px;
        margin: 0 60px 0 0;
    }
    @mixin comment-btn_vis{
        right: 0;
        bottom: 0;
        position: absolute;
    }
    .comment-btn{
        @include comment-btn_size();
        @include comment-btn_vis();
    }
    @mixin N-OfLikes{
        postion: absolute;
        bottom: 0;
        right: 0;
        z-index: 4;
    }
</style>
