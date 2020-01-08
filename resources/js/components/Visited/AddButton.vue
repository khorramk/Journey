<template>
<<<<<<< HEAD
        <button @click="showFullModal" class="plus-btn">
            +
        </button>
=======
    <div >
        <div v-if="this.$store.state.Button.add" class="change-button__to-add">
            <button @click="showFullModal">
                add button
            </button>
        </div>
        <div class="float-right z-40" v-if="this.$store.state.Button.add === 'false'">
           <button @click="closeModal">
                X
           </button>
        </div>

    </div>
>>>>>>> parent of 0c12f6d... fixed add btn layout and  visual design and fixed modal for avatar
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        methods: {
            showFullModal() {
<<<<<<< HEAD
                if(this.$route.path === '/visited'){
                    return this.$store.dispatch('AddCountry')
                }else if(this.$route.path === '/'){
                    return this.$store.dispatch('AddPosts');

                }else if(this.$route.path === '/wishlist'){
                    return this.$store.dispatch('addWishes');
                }
=======
               this.$store.dispatch('showModal');
                this.$store.dispatch('showClosebtn');
            },
            closeModal(){
                this.$store.dispatch('closeModal');
            }
        },
>>>>>>> parent of 0c12f6d... fixed add btn layout and  visual design and fixed modal for avatar

            }
        }
    }
</script>

<style lang="scss" scoped>
<<<<<<< HEAD
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
=======

>>>>>>> parent of 0c12f6d... fixed add btn layout and  visual design and fixed modal for avatar
</style>
