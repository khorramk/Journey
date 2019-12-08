<template>
    <div class="bg-wood h-full-viewport">
      <Nav/>
      <main>
          <!-- <Avatar/> -->
          <input class="w-100" type="search" v-model="search" name="search" id="">
          <div class="posts-container" v-for="(post, i) in getHistory" :key="i">
             <Posts :post="post"/>
             <Comment v-if="$store.state.comment.addComments" :commentsHistory="pastComments"/>
          </div>
      </main>
    </div>
</template>

<script>
import Avatar from '../dashboard/Avatar';
// import Search from '../search/Search';
import Posts from '../Posts/Posts';
import Comments from '../CommentsBlock/Comments';
import Nav from '../Nav';
    export default {
        components: {
            Avatar,
            // Search,
            Nav,
            Posts,
            Comments
        },
        data() {
            return {
                historyOfPosts: [],
                search: ''
            }
        },
        mounted () {
            axios.get('/api/posts').then((resp)=> {
                console.log(resp);
               this.$data.historyOfPosts = resp.data['users-posts'];
               this.$store.dispatch('disableButton');
            })
        },
        computed: {
           getHistory: function(){
               let name = this.$data.historyOfPosts.map((e)=> e.posts)
               console.log(name);

                return this.inputslist(this.$data.search, name).filter((e)=> e !== null);
            }
        },
        methods: {
             inputslist(inp, arr) {
                let listsorted = [];
                for(let i=0; i < arr.length; i++){
                    
                   let list = arr[i].substr(0, inp.length).toUpperCase() === inp.toUpperCase() ? arr[i]:null;
                             listsorted.push(list);
                    
                }
                return listsorted;
             }
        },

    }
</script>

<style lang="scss" scoped>
 .bg-wood{
     background-color: #6F6868;
 }
</style>
