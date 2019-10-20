<template>
    <ul>
        <li class="posts-block overflow-hidden shadow-lg " v-for="(post, i) in this.$props.posts" :key="i">
            <!-- <Avatar/> -->
                <div class="font-bold text-xl mb-2">
                    {{post.posts}}
                </div>
                
            <div class="px-6 py-4">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
               
            </div>
            <form action="" method="post">
                <button type="submit">
                     <img class="like-btn" src="https://img.icons8.com/pastel-glyph/64/000000/facebook-like.png"/>
                </button>
            </form>
            <svg class="comment-btn" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="64" height="64"
            viewBox="0 0 50 50"
            style=" fill:#000000;"><path d="M 25 4.070313 C 12.367188 4.070313 2.070313 12.921875 2.070313 24 C 2.070313 30.429688 5.59375 36.027344 11.003906 39.6875 C 10.996094 39.902344 11.011719 40.25 10.730469 41.296875 C 10.378906 42.589844 9.671875 44.414063 8.238281 46.46875 L 7.21875 47.929688 L 9 47.929688 C 15.171875 47.929688 18.742188 43.90625 19.296875 43.261719 C 21.132813 43.691406 23.023438 43.929688 25 43.929688 C 37.632813 43.929688 47.929688 35.078125 47.929688 24 C 47.929688 12.921875 37.632813 4.070313 25 4.070313 Z M 25 5.929688 C 36.769531 5.929688 46.070313 14.078125 46.070313 24 C 46.070313 33.921875 36.769531 42.070313 25 42.070313 C 22.960938 42.070313 21.039063 41.875 19.234375 41.402344 L 18.65625 41.25 L 18.277344 41.714844 C 18.277344 41.714844 15.390625 44.972656 10.78125 45.757813 C 11.617188 44.25 12.234375 42.84375 12.519531 41.78125 C 12.921875 40.300781 12.929688 39.300781 12.929688 39.300781 L 12.929688 38.789063 L 12.5 38.515625 C 7.21875 35.15625 3.929688 29.957031 3.929688 24 C 3.929688 14.078125 13.230469 5.929688 25 5.929688 Z M 15 22 C 13.894531 22 13 22.894531 13 24 C 13 25.105469 13.894531 26 15 26 C 16.105469 26 17 25.105469 17 24 C 17 22.894531 16.105469 22 15 22 Z M 25 22 C 23.894531 22 23 22.894531 23 24 C 23 25.105469 23.894531 26 25 26 C 26.105469 26 27 25.105469 27 24 C 27 22.894531 26.105469 22 25 22 Z M 35 22 C 33.894531 22 33 22.894531 33 24 C 33 25.105469 33.894531 26 35 26 C 36.105469 26 37 25.105469 37 24 C 37 22.894531 36.105469 22 35 22 Z"></path></svg>
            
        </li>
    </ul>
</template>

<script>
import Avatar from '../dashboard/Avatar';
    export default {
        data() {
            return {
                ListOfPosts: Array(9).fill('test')
            }
        },
        props: {
            posts: {
                type: Array,
                default(){
                    return []
                }
            },
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
    .posts-block{
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
</style>
