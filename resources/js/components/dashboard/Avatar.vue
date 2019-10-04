<template>
    <div>
        <div class="base-image-input" style="{ 'background-image': url(`/public/storage/avatar)`}" >
            <span>
                choose image
            </span>
            <!--use form to submit a file and upload it-->
            <form>
                <input type="file" name="" id="upload" v-on:change="onSelectFile">
            </form>
        </div>
<!--
            <input id="imageUpload"   v-on:click="clicked($event)" type="file"
            name="profile_photo" placeholder="Photo" required="" capture>
            <input type="image" :src="pathToImage" alt=""> -->



    </div>
</template>

<script>
import { request } from 'http';
    export default {
        data() {
            return {
                image: '',
               imageData: null,
               file: ''
            }
        },
        methods: {

            insertAvatar() {
                submit
                axios.post('/api/avatar').then((resp)=> console.log('avatar uploaded'))
            },
            onSelectFile(event){
                    let formData = new FormData();

                 axios.post('/api/avatars', {

                }).then((resp)=> console.log(resp))//this.$data.imageData = '/public/storage/avatar1')
                .catch((err)=>console.log(err));//this.$data.imageData = /asset/image/url);

            },
            chooseImage(){
                console.log(this.$refs);
                this.$refs.fileInput;
            }
        },
    }

</script>

<style lang="scss" scoped>

</style>
