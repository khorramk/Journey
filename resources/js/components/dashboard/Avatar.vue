<template>
<<<<<<< HEAD
        <!-- <img  class="avatar-container__avatar-img avatar" :src="this.$store.state.avatar.path" alt="picture" sizes=""  srcset="" placeholder="pic" @click="openSelection">
        <!-- <div class="modal avatar-container__avatar-modal avatar-modal relative" v-if="$store.state.avatar.pop"> -->
            <!-- <button class="remove-btn" v-on:click.prevent="removeSelection">
               ( X )
            </button> -->
            <div class="container">
                    <input class="avatar-modal__input-avatar inputfile"  type="file"  name="" v-on:change="onSelectFile">
                    <label for="file"><img :src="this.$store.state.avatar.path" width="100" height="100" alt=""></label>
            </div>
        
        <!-- </div> -->

=======
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
>>>>>>> parent of 0c12f6d... fixed add btn layout and  visual design and fixed modal for avatar
</template>
<script>
    export default {
        data() {
            return {
               file: '',
<<<<<<< HEAD
               imageData: '',
               closeUponSelectImage: true,
               switch: false
=======
               gone: true,
               pop: false
>>>>>>> parent of 0c12f6d... fixed add btn layout and  visual design and fixed modal for avatar
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
<<<<<<< HEAD
<style lang="scss" scoped>
    @mixin avatar-size {
        width: 75px;
        height: 75px;
        margin: 20px;
    }
    @mixin avatar-pos{
        left: 0;
        bottom: 0;
        position: absolute;
    }
    @mixin avatar-vis{
        background: lightgrey;
        border-radius: 50%;
        text-align: center;
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
    .inputfile {
        width: 0.1px;
        height: 0.1px;
        opacity: 0;
        overflow: hidden;
        position: absolute;
        z-index: -1;
    }
        .inputfile + label {
        font-size: 1.25em;
        font-weight: 700;
        color: white;
        background-color: black;
        display: inline-block;
        border-radius: 50%;
        width: 75px;
        height: 75px;
    }

    .inputfile:focus + label,
    .inputfile + label:hover {
        background-color: red;
    }
    .inputfile + label {
        cursor: pointer; /* "hand" cursor */
    }
</style>
=======
>>>>>>> parent of 0c12f6d... fixed add btn layout and  visual design and fixed modal for avatar

