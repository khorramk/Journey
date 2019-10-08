<template>
    <div>
        <li class="max-w-sm rounded overflow-hidden shadow-lg bg-light-grey border border-8 border-black" v-for="(post, i) in this.$props.posts" :key="i">
            <Avatar/>
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">
                    {{post.posts}}
                </div>
                <p class="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
                </div>
            <div class="px-6 py-4">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
            </div>
        </li>
    </div>
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

</style>
