<template>
    <div class="">
        <Nav></Nav>
        <div class="container-for-WishList" v-if="this.$store.state.Modal.open === false">

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
         <Modal v-if="this.$store.state.Modal.open && this.$store.state.Modal.close === false"/>
    </div>
</template>
<script>
import Avatar from '../dashboard/Avatar';
import Search from '../search/Search';
import AddButton from '../Visited/AddButton';
import Modal from '../Modal';
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
            Modal

        },
    }
</script>

<style lang="scss" scoped>

</style>
