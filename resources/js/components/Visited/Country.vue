<template>
    <div>
        <li v-for="(CountryVisited, i) in ListofCountries" :key="i" >
            <image src="" alt="....avatars"/>
        </li>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                ListofCountries: Array(500).fill(1,500)
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>