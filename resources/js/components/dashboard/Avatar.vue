<template>
    <div class="avatar-container">
        <picture class="avatar-container__avatar-picture">
            <span class="avatar-container__avatar-select-text" v-show="closeUponSelectImage">
                choose image
            </span>
            <img  class="avatar-container__avatar-img" :src="this.$store.state.avatar.path" alt="avatar" sizes="" width="75" height="75" srcset="" @click="openModal">
            <div class="modal avatar-container__avatar-modal" v-if="this.$store.state.avatar.open" :style="{width: '400px', height: '300px'}">
                <input class="avatar-modal__input-avatar base-image-input"  type="file"  name="" id="upload" v-on:change="onSelectFile">
            </div>
        </picture>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                image: '',
               imagePath: '',
               file: '',
               imageData: '',
               file: '',
               closeUponSelectImage: true,
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
                   .then((resp) => {
                      let path = `./storage/${resp.data}`;
                    this.$store.dispatch('showImage', path),
                    this.$data.closeUponSelectImage = false, this.$data.pop = false;})
                    .catch((err) => console.log(err));

            },
            openModal(){
                console.log(this.$store.state.avatar);
                this.$store.commit('openModal');
            }
        },

    }

</script>

