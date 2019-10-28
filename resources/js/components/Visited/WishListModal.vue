<template>
    <div class="container">
        <div class="row">
           <form action="" autocomplete="on" class="w-100" @submit.prevent="submit" enctype='multipart/form-data'>
                <input ref="fileInput" class="w-100 p-2"  type="file"  name="file" id="upload"  placeholder="add image">

                <input type="search" v-model="search" name="name" id="" class="w-100 p-2" placeholder="type the country"/>


                <div v-for="(country, i) in populate" :key="i" class="country-list">
                    <div class="clickable-input country" @click="$data.search = country">
                        {{country}}
                    </div>
                </div>
                <button type="submit"></button>
                    
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
        computed: {
            populate: function(){
               let name = this.fetchCountryWrapperObject.map((countries, i)=> {
                      return countries.name;
                });
                return this.inputslist(this.$data.search, name).filter((e)=> e !== null);
            }
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
                var formData = new FormData();
                formData.append("image", this.$refs.fileInput.files[0]);
                formData.append("search", this.$data.search);
                axios.post('/api/visited', formData, {
                   
                        value: this.$data.search,
                    
                }).then(()=> window.location.href = '/visited')
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
    input[type="file" i]:before{
        width: 100% important;
        background: rgb(10, 10, 53);
        color: white;
    }
    button, input{
        background: black;
        color: white;
    }
</style>
