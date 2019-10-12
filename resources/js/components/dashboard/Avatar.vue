<template>
    <picture class="avatar-container__avatar-picture " >
        <img  class="avatar-container__avatar-img avatar" :src="this.$store.state.avatar.path" alt="picture" sizes="" width="75" height="75" srcset="" placeholder="pic" @click="openSelection">
        <div class="modal avatar-container__avatar-modal avatar-modal relative" v-if="$store.state.avatar.pop">
            <button class="remove-btn" v-on:click.prevent="removeSelection">
               ( X )
            </button>
            <input class="avatar-modal__input-avatar base-image-input"  type="file"  name="" id="upload" v-on:change="onSelectFile">
        </div>
    </picture>
</template>
<script>
    export default {
        data() {
            return {
                image: '',
               imageData: '',
               file: '',
               closeUponSelectImage: true,
               switch: false
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
            openSelection(){
                console.log(this.$store.state.avatar);
                this.$store.dispatch('openAvatar');
                this.$data.switch = true;
            },
            removeSelection(){
                console.log('test');
                this.$store.dispatch('closeSelection');
               
            }
        },

    }

</script>
<style lang="scss" scoped>
    @mixin avatar-size {
        width: 75px;
        height: 75px;
    }
    @mixin avatar-pos{
        left: 0;
        top: 0;
        position: absolute;
    }
    @mixin avatar-vis{
        background: lightgrey;
        border-radius: 50%;
    }
    @mixin avatar-modal_size{
        width: 100vw;
        height: 100%;
    }
    @mixin avatar-modal_vis{
        background: wheat;
    }
   @mixin remove-btn_pos{
       right: 0;
       top: 0;
       position: absolute;
   }
    .avatar{
        @include avatar-pos();
        @include avatar-size();
        @include avatar-vis();
    }
    .avatar-modal{
        @include avatar-modal_size();
        @include avatar-modal_vis();
    }
    .remove-btn{
        @include remove-btn_pos();
    }
</style>

