<template>
    <div>
        <form v-on:submit="insertAvatar">
            <input type="file" name="avatar" accept="image/*">
        </form>
          
        
    </div>
</template>

<script>
    export default {
        methods: {
            insertAvatar() {
                axios.post('/api/avatar').then((resp)=> console.log('avatar uploaded'))
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>