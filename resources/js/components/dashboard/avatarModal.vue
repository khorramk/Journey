<template>
    <div class="w-full h-full-screen bg-blue-300">
        <AddButton />
            Modal Open
        <textarea name="" v-model="text" id="" cols="30" rows="10"></textarea>
        <button type="submit" @click="submit">Submit</button>
    </div>
</template>

<script>
import AddButton from './Visited/AddButton';
    export default {
        data() {
            return {
                text: ''
            }
        },
        methods: {
            submit() {
                axios.post('/api/wishLis', {text: this.$data.text}).then(()=> this.$store.dispatch('closeModal'));
            }
        },
        components: {
            AddButton,
        },
    }
</script>

<style lang="scss" scoped>

</style>
