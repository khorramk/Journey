<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="form-group">
                    <input class="form-control" v-model="texts" type="search" name="" id="">
                    <button class="btn btn-primary" type="submit"></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
              texts: ''
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>