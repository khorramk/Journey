<template>
    <div class="container">
        <div class="row">
           <form action="">

                <input type="search" v-model="search" name="" id="">
                <div class="container" v-for="">
                    <form action="">
                        <input type="text" v-model="answer">
                        <button type="submit">
                            submit
                        </button>
                    </form>
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
                search: '',
                answer: ''
            
            }
        },
        watch: {
            search: function(){
                this.debounceGetCountries();
            }
           
        },
        mounted () {
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
        created () {
            this.debounceGetCountries=
                _.debounce(function() {
                this.$data.answer = this.fetchCountryWrapperObject.map((countries, i)=> {
                      return countries.name;
                }).filter((countryName)=> {
                    console.log(countryName);
                    return countryName.toLowerCase().includes(this.$data.search.toLowerCase());
                })
            }, 500)
    
        }
    }
</script>

<style lang="scss" scoped>

</style>
