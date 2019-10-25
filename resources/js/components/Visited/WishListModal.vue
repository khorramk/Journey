<template>
    <div class="container">
        <div class="row">
             <input class="w-100 p-2"  type="file"  name="" id="upload" v-on:change="onSelectFile" placeholder="add image">
           <form action="" autocomplete="on" class="w-100" @submit.prevent="submit">
               
                <input type="search" v-model="search" name="" id="" class="w-100 p-2" placeholder="type the country"/>
           
                   
                        <div v-for="(country, i) in populate" :key="i" class="country-list">
                            <div class="clickable-input country" @click="$data.search = country">
                                {{country}}
                            </div>
                            
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
                file: ''
            
            
            }
        },
        mounted() {
            axios.get('https://restcountries.eu/rest/v2/all').then((resp)=> {
                console.log(resp.data);
                this.$data.fetchCountryWrapperObject = resp.data;
            });
        },
        computed: {
            populate: function(){
               let name = this.fetchCountryWrapperObject.map((countries, i)=> {
                      return countries.name;
                });
                return this.inputslist(this.$data.search, name).filter((e)=> e !== null);
            },

            
        },
        methods: {
             inputslist(inp, arr) {
                let listsorted = [];
                for(let i=0; i < arr.length; i++){
                    
                   let list = arr[i].substr(0, inp.length).toUpperCase() === inp.toUpperCase() ? arr[i]:null;
                             listsorted.push(list);
                    
                }
                return listsorted;
            },
            submit() {
                console.log('test');

                axios.post('/api/visited',{
                    value: this.$data.search,
                    file: this.$data.file
                }).then(()=> window.location.href = '/visited');

            },
            onSelectFile(event){
                let formData = new FormData();
                formData.append('image', event.target.files[0], "TESTING");
                this.$data.file = formData;
                console.log(formData);

            },
        },
    }
</script>

<style lang="scss" scoped>
    @mixin country{
        width: 100%;
        padding-bottom: 20px;
    }
    .country{
        @include country();
    }
    .country:hover{
        box-shadow: 1px;
        cursor: pointer;
    }
</style>
