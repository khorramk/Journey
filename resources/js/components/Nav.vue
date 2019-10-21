<template>
        <div class="nav nav-container left-align border bg-green-400 absolute w-1/3">
            <nav class="nav-container__nav-block inset-y-0.left-0 flex flex-col">
               <router-link class="nav-block__nav-links " to="/">Dashboard</router-link>
               <router-link class="nav-block__nav-links" to="/history">History</router-link>
               <router-link class="nav-block__nav-links" to="/visited">Visited</router-link>
               <router-link class="nav-block__nav-links" to="/wishList">WishList</router-link>
            </nav>
        </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>

</style>
