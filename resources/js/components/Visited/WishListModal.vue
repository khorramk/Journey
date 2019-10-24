<template>
    <div class="container">
        <div class="row">
           <form action="">

                <input type="search" v-model="search" name="" id="" autocomplete="on"/>
           
                   
                        <div v-for="(country, i) in countryData" :key="i" class="country-list">
                            <h5>
                                {{country}}
                            </h5>
                            <input type="hidden" name="country" :value="country">
                        </div>
                        
                        
                
                <button type="submit"> submit</button>
           </form>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                fetchCountryWrapperObject: [],
                search: ''
            
            }
        },
        mounted() {
            axios.get('https://restcountries.eu/rest/v2/all').then((resp)=> {
                console.log(resp.data);
                this.$data.fetchCountryWrapperObject = resp.data;
            });
        },
        methods: {
            submit() {
                axios.post('/api/wishList').then();
            }
        },
        computed: {
            populate: function(){
               return this.fetchCountryWrapperObject.map((countries, i)=> {
                      return countries.name;
                }).filter((countryName, i)=> {
                    console.log(countryName);
                    return countryName.toLowerCase().includes(this.$data.search.toLowerCase());
                })
            },

            
        },
        methods: {
            insertAndShift(from, to, arr) {
                    let cutOut = arr.splice(from, 1) [0]; // cut the element at index 'from'
                    arr.splice(to, 0, cutOut);            // insert it at index 'to'
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>
