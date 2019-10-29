<template>
    <div>
        <ul>
            <li class=" card w-100" v-for="(comment, i) in  comments" :key="i">
                     <Avatar/>
                    <div class="card-body">
                    <h5 class="card-title">{{comment.comment}}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                <div class="px-6 py-4">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>

                </div>
                <form v-on:submit.prevent="submit()">
                    <!-- increments the like -->
                    <button type="submit" @click="liked += 1" :disabled="disable">
                        <!-- show the filtred likes upon increment -->
                            <img class="like-btn" src="https://img.icons8.com/pastel-glyph/64/000000/facebook-like.png"/>
                            <span  class="absolute float-right" v-text="liked || comment.likes"></span>
                    </button>
                </form>
                
            </li>
        </ul>
    </div>
</template>

<script>
import Avatar from '../dashboard/Avatar';
    export default {
        data() {
            return {
               key : '',
               comments: '',
               liked: 0,
               disable: false
            }
        },
         mounted () {
            axios.get(`/api/comments/${this.$store.state.comment.postID.id}`).then((resp)=> this.$data.comments = resp.data.comments);
        },
        methods: {
            submit() {
                axios.post('/api/comments').then(()=> console.log('success'));
            }
        },
        components: {
            Avatar,
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
