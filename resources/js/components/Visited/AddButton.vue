<template>
        <button @click="showFullModal" class="plus-btn">
            +
        </button>
</template>

<script>
    export default {
        methods: {
            showFullModal() {
                if(this.$route.path === '/visited'){
                    return this.$store.dispatch('AddCountry')
                }else if(this.$route.path === '/dashboard'){
                    return this.$store.dispatch('AddPosts');
                }else{
                    return 0;
                }

            }
        }
    }
</script>

<style lang="scss" scoped>
     @mixin plus-btn-size{
         width: 75px;
         height: 75px;

     }
     @mixin plus-btn-pos{
         position: fixed;
         right: 0;
         bottom: 0;
         margin: 60px 20px;
        z-index: 2;

     }
     @mixin plus-btn-vis{
         background: teal;
         font-size: 20px;
         border-radius: 50%;
     }
     .plus-btn{
         @include plus-btn-pos();
         @include plus-btn-size();
         @include plus-btn-vis();
     }
     .btn-container{
         position: sticky;
     }
</style>
