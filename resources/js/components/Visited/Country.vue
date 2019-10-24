<template>
    <div clas="w-100 h-100 position-relative ">
        <Nav/>
       <div class="CountryContainer" v-if="$store.state.Country.openCountryModal === false">
            
            <div class="card-container row">
                <li class="card" v-for="(CountryVisited, i) in ListofCountries" :key="i" >
                    <image class="card-img-top" src="" alt="....country-picture"/>
                    <div class="card-body">
                        <h5 class="card-title" v-if="CountryTitle || CountryVisited" v-text="CountryTitle || CountryVisited"></h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>

                </li>
            </div>
            <AddButton/>
       </div>
        <WishListModal v-if="$store.state.Country.openCountryModal"/>
    </div>
</template>

<script>
import Nav from '../Nav';
import AddButton from './AddButton';
import WishListModal from './WishListModal';
    export default {
        data() {
            return {
                ListofCountries: Array(500).fill('test'),
                CountryTitle: null
            }
        },
        components: {
            Nav,
            AddButton,
            WishListModal
        }
    }
</script>

<style lang="scss" scoped>

</style>
