<template>
    <div>
        <input type="search" v-model="search" name="" id="" class="w-100 p-2" placeholder="type the country"/>
           
                   
                        <div v-for="(country, i) in countryList" :key="i" class="country-list row w-100">
                            <div class="clickable-input country" @click="$data.search = country">
                                {{country}}
                            </div>
                            
                        </div>
                        
                        
    </div>
</template>

<script>
    export default {
        data() {
            return {
                search: ''
            }
        },
        props: {
            countryList: {
                type: Array,
                default: []
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>