<template>
    <div class="bg-secondary w-100 h-100 row">
         
        <form class="form-group w-100 h-100" @submit.prevent="submit">
           
            <textarea class="form-control " name="" v-model="text" id="" cols="" rows="" placeholder="share your experience"></textarea>
           <button class="btn btn-danger m-5 w-25">
          close
        </button>
            <button class="btn btn-success m-5 w-25" type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
import CloseButton from './CloseButton';
    export default {
        data() {
            return {
                text: ''
            }
        },
        methods: {
            submit() {
                axios.post('/api/posts', {text: this.$data.text}).then(()=> window.location.href = '/').catch((err)=> console.log(err));
            }
        },
        components: {
            CloseButton,
        },
    }
</script>

<style lang="scss" scoped>
    @mixin modal_size{
        width: 100%;
        height: calc(100vh - 80px);
    }
    @mixin modal_vis{
        background: rgb(114, 93, 93);
        text-align: center;
    }
    .modal{
        @include modal_size();
        @include modal_vis();
        position: relative;
    }
    @mixin cross-btn_size{
        font-size: 25px;
    }
    @mixin cross-btn_vis{
        background:honeydew;

    }
    @mixin cross-btn_pos{
        right: 0;
        position: absolute;
        top: 0;
    }
    .cross-btn{
        @include cross-btn_pos();
        @include cross_btn_size();
        @include cross-btn_vis();
    }
    @mixin text-body_size{
        width: calc(100% - 25px);
        height: calc(100% - 50px);
        margin-top: 30px;

    }
    .text-body{
        @include text-body_size();
    }
    textarea {
        width: calc(100vw - 30px);
        height: calc(100vh - 400px);
        margin: 20px;
    }
</style>
