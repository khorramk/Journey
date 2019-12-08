<template>
    <div class="">
        <Nav></Nav>
        <div class="container-for-WishList" v-if="$store.state.WishList.open === false">
            <!-- <Search/> -->
            <AddButton/>
            <div class="container">
                <div class="row  m-2" v-for="(wish, i) in wishList" :key="i">
                    <div class="bg-grey card p-2 w-100 text-center ">
                            <h4 clas="text-center">
                                {{wish.country_name}}
                            </h4>  
                            <form @submit.prevent="remove">
                                <button class="btn btn-danger float-left" type="submit">
                                    close
                                    </button>    
                            </form>   
                    </div>
                </div>
            </div>
        </div>
        <WishListModal v-if="$store.state.WishList.open"/>
    </div>
</template>
<script>
import Avatar from '../dashboard/Avatar';
// import Search from '../search/Search';
import AddButton from '../Visited/AddButton';
import WishListModal from './WishListModal';
// import CountryModal from '../CountryModal';
import Nav from '../Nav';
    export default {
        data() {
            return {
                wishList: Array(30).fill(1,9)
            }
        },
        components: {
            Nav,
            Avatar,
            // Search,
            AddButton,
            WishListModal,
            // CountryModal

        },
        mounted () {
            axios.get('/api/wishlist').then((resp)=> {
                console.log(resp);
                this.$data.wishList = resp.data.wishes;
            });
        },
        methods: {
            remove() {
                axios.delete('/api/wishlist').then(()=> window.location.href= '/wishlist')
            }
        },
    }
</script>

<style lang="scss" scoped>
    .bg-grey{
        background-color: #C4C4C4;
    }
</style>
