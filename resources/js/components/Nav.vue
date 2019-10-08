<template>
    <div class="nav nav-container border bg-green-400 sticky w-screen bg-pale-water h-menu-item-height">
        <nav class="nav-container__nav-block inset-y-0.left-0 flex w-nav-bar-size ">
            <div class="dashboard-router-link-container__click-toShow-btn nav-block__nav-links w-menu-item-size border border-black " @click="popLogOutBtn" v-on:mouseleave="showBtn = false">
                Dashboard

            </div>

            <router-link class="nav-block__nav-links w-menu-item-size h-menu-item-height border border-black" to="/history">History</router-link>
            <router-link class="nav-block__nav-links w-menu-item-size h-menu-item-height border border-black" to="/visited">Visited</router-link>
            <router-link class="nav-block__nav-links w-menu-item-size h-menu-item-height border border-black" to="/wishList">WishList</router-link>
        </nav>
        <div v-if="showBtn" class="popup absolute inset-y-0.left-0 py-2 overflow-y-visible bg-white w-nav-bar-size">
            <form class="logout-pop-up " v-on:submit.prevent="logout">
                    <input type="submit" value="log out">
            </form>
            <div class="show-route-to-dashboard__modify-showBtn w-menu-item-size border border-black" @click="showBtn = false">
            <router-link class="logout-pop-up  bg-pale-water" to="/">Dashboard</router-link>

            </div>
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
            },
            logout(){
                console.log('test');
                axios.post('/logout').then(()=> window.location.href = '/')
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>
