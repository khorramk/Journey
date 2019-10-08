<template>
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
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        methods: {
            showFullModal() {
               this.$store.dispatch('showModal');
                this.$store.dispatch('showClosebtn');
            },
            closeModal(){
                this.$store.dispatch('closeModal');
            }
        },

    }
</script>

<style lang="scss" scoped>

</style>
