<template>
    <div class="modal bg-blue-300 relative">
        <button class="cross-btn">
            ( X )
        </button>
        <form @submit.prevent="submit">
            <textarea class="text-body" name="" v-model="text" id="" cols="30" rows="10" placeholder="share your experience"></textarea>
            <button type="submit">Submit</button>
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
                axios.post('/api/posts', {text: this.$data.text}).then(()=> window.location.href = '/');
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
</style>
