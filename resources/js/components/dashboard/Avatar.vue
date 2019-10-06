<template>
    <div>
        <!-- <div class="base-image-input" v-bind:style="{ backgroundImage: `url(${imageData})`, width: '80px', height: '90px'}" >
            <span v-if="gone">
                choose image
            </span> -->
            <picture>
                <span v-show="gone">
                    choose image
                </span>
                <img :src="imageData" alt="avatar" sizes="" width="75" height="75" srcset="" @click="openModal">
                <div class="modal" v-if="pop" :style="{width: '400px', height: '300px'}">
                    <input class="base-image-input"  type="file"  name="" id="upload" v-on:change="onSelectFile">
                </div>
            </picture>
                
           
        <!-- </div> -->
    </div>
</template>
<script>
    export default {
        data() {
            return {
                image: '',
               imageData: '',
               file: '',
               gone: true,
               pop: false
            }
        },
        methods: {
            insertAvatar() {
                submit
                axios.post('/api/avatar').then((resp)=> console.log('avatar uploaded'))
            },
            onSelectFile(event){
                const formData = new FormData();
                formData.append('image', event.target.files[0], "TESTING");
                this.file = event.target.files[0];
                console.log(this.file);
                 axios.post('/api/avatars', formData)
                    .then((resp) => this.$data.imageData = `./storage/${resp.data}`, this.$data.gone = false, this.$data.pop = false)//this.$data.imageData = '/public/storage/avatar1')
                    .catch((err) => console.log(err));//this.$data.imageData = /asset/image/url);

            },
            openModal(){
                this.$data.pop= true;
            }
        },

    }

</script>

