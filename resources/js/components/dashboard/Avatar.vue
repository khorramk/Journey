<template>
    <div>
        <div class="base-image-input" :style="{ background-image': url(./storage/images/${this.imageData})}" >
            <span>
                choose image
            </span>
            <!--use form to submit a file and upload it-->
            <form>
                <input type="file"  name="" id="upload" v-on:change="onSelectFile">
            </form>
        </div>
<!--
            <input id="imageUpload"   v-on:click="clicked($event)" type="file"
            name="profile_photo" placeholder="Photo" required="" capture>
            <input type="image" :src="pathToImage" alt=""> -->



    </div>
</template>

<script>
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
                const formData = new FormData();
                formData.append('image', event.target.files[0], "TESTING");
                this.file = event.target.files[0];
                console.log(this.file);
                 axios.post('/api/avatars', formData)
                    .then((resp) => console.log(resp.data))//this.$data.imageData = '/public/storage/avatar1')
                    .catch((err) => console.log(err));//this.$data.imageData = /asset/image/url);

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
