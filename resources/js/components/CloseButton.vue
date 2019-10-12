<template>
    <button class="cliked-to-close" @clicked="clickedToClose">
        X
    </button>
</template>
<script>
    export default {
        data() {
            return {
                key: value
            }
        },
        methods: {
            clickedToClose() {
                this.$store.dispatch('closeModal');
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>
