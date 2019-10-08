<template>
    <div class="nav nav-container border bg-green-400 sticky w-screen bg-pale-water">
        <nav class="nav-container__nav-block inset-y-0.left-0 flex w-nav-bar-size ">
            <div class="dashboard-router-link-container__click-toShow-btn nav-block__nav-links w-menu-item-size border border-black " @mouseenter="popLogOutBtn">
                <span>Dashboard</span>

            </div>

            <router-link class="nav-block__nav-links w-menu-item-size border border-black" to="/history">History</router-link>
            <router-link class="nav-block__nav-links w-menu-item-size border border-black" to="/visited">Visited</router-link>
            <router-link class="nav-block__nav-links w-menu-item-size border border-black" to="/wishList">WishList</router-link>
        </nav>
      <div v-if="showBtn" class="popup absolute left-0 block mt-2 py-2 w-48 h-75 overflow-y-visible bg-white rounded-lg shadow-xl">
        <form class="logout-pop-up " v-on:submit.prevent="logout">
                <input type="submit" value="log out">
        </form>
         <router-link class="logout-pop-up  w-400 h-12 bg-pale-water" v-if="showBtn" to="/">Dashboard</router-link>
      </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                showBtn: false
            }
        },
        methods: {
            popLogOutBtn() {
                console.log('test');
                this.$data.showBtn = true;
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>
