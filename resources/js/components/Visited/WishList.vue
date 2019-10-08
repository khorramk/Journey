<template>
    <div>
        <Nav></Nav>
        <Avatar/>
        <Search/>
        <AddButton/>
        <WishList/>
        <div class="container">
            <li v-for="(wish, i) in wishList" :key="i">
                <div class="card">
                    {{i}}
                </div>
            </li>
        </div>
    </div>
</template>
<script>
import Avatar from '../dashboard/Avatar';
import Search from '../search/Search';
import AddButton from '../Visited/AddButton';
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

        },
    }
</script>

<style lang="scss" scoped>

</style>
