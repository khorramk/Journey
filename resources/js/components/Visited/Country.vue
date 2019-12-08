<template>
    <div clas="w-100 h-100 position-relative ">
        <Nav/>
       <div class="CountryContainer" v-if="$store.state.Country.openCountryModal === false">
            
            <div class="card-container">
                <li class="card" v-for="(CountryVisited, i) in ListofCountries" :key="i" >
                    
                    <div class="card-body row border border-primary m-5">
                        <img :src="`./storage/${CountryVisited.images}`" class="w-50 col-sm-6" alt="Responsive image">
                    <!-- <image class="img-fluid" :src="" alt="....country-picture"/> -->
                    <div class="seperator w-50 col-sm-6">
                        <h5 class="card-title" v-if="CountryTitle || CountryVisited">
                            {{CountryTitle || CountryVisited.country_name}}
                        </h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>

                    </div>
                        
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
        },
        mounted (){
            axios.get('/api/visited').then((resp)=> this.$data.ListofCountries = resp.data.visited);
        },
    }
</script>

<style lang="scss" scoped>
    @mixin card_size{
        width: 200px;
        height: 400px;
    }
    .image-wrapper{
        @include card_size();
    }
</style>
