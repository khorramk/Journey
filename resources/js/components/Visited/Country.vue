<template>
    <div>
        <Nav/>
        <li v-for="(CountryVisited, i) in ListofCountries" :key="i" >
            <image src="" alt="....avatars"/>
        </li>
    </div>
</template>

<script>
import Nav from '../Nav';
    export default {
        data() {
            return {
                ListofCountries: Array(500).fill(1,500)
            }
        },
        components: {
            Nav
        }
    }
</script>

<style lang="scss" scoped>

</style>