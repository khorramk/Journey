<template>
    <div class="">
        <Nav></Nav>
        <div class="container-for-WishList" v-if="$store.state.Modal.open === false">

            <Avatar/>
            <Search/>
            <AddButton/>
            <div class="container">
                <li v-for="(wish, i) in wishList" :key="i">
                    <div class="card">
                        {{i}}
                    </div>
                </li>
            </div>
        </div>
        <WishListModal v-if="$store.state.Modal.open && $store.state.Modal.close === false"/>
    </div>
</template>
<script>
import Avatar from '../dashboard/Avatar';
import Search from '../search/Search';
import AddButton from '../Visited/AddButton';
import WishListModal from './WishListModal';
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
            Search,
            AddButton,
            WishListModal

        },
    }
</script>

<style lang="scss" scoped>

</style>
