<template>
    <div class="w-full h-full-screen bg-blue-300">
        <button>
            ( X )
        </button>
        <textarea name="" v-model="text" id="" cols="30" rows="10" placeholder="share your experience"></textarea>
        <button type="submit" @click="submit">Submit</button>
    </div>
</template>

<script>
import CloseButton from './CloseButton';
    export default {
        data() {
            return {
                text: ''
            }
        },
        methods: {
            submit() {
                axios.post('/api/wishList', {text: this.$data.text}).then(()=> window.location.href = '/');
            }
        },
        components: {
            CloseButton,
        },
    }
</script>

<style lang="scss" scoped>

</style>
