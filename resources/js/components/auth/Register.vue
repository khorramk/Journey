<template>
        <form class="register-form relative" v-on:submit.prevent="register">
            <div class="register-inputs-container absolute flex flex-col">
                <label for="name" class="label-name label">Name</label>
                <input id="name" type="text" class="shadow-md inputs-for-register border-4 border border-4  font-bold border-black " v-model="name" name="name" value="name" required autocomplete="name" autofocus placeholder="Name">
                <div v-if="error" class="container">
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ errMessage }}</strong>
                    </span>
                </div>
                <label for="email" class="label-email label">Email</label>
                <input id="email" type="email" class=" shadow-md  border-4  border border-4 inputs-for-register font-bold border-black" v-model="email" name="email" value="Email" required autocomplete="email" placeholder="Email">
                <div v-if="error" class="container">
                    <span class="invalid-feedback" role="alert">
                    <strong>{{ errMessage }}</strong>
                    </span>
                </div>
                <label for="password" class="label-password label">Password</label>
                <input id="password" type="password" class=" shadow-md  border-4  border border-4 inputs-for-register font-bold border-black " v-model="password" name="password" required autocomplete="new-password" placeholder="Password">
                <div v-if="error" class="container">
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ errMessage }}</strong>
                    </span>
                </div>
                <label for="password-confirm" class="label-password label">Confirm Password</label>
                <input id="password-confirm" type="password" class=" shadow-md  border-4  border border-4 inputs-for-register font-bold border-black" v-model="passConfirm" name="password_confirmation" required autocomplete="new-password" placeholder="Confirm Password">
            </div>
            <div class="btn-submit-container">
                <button type="submit" class=" bg-leaf-green  border-4 border-black btn-register">
                    Register
                </button>
                <a href="/" class="btn-link-sign-in bg-pure-white border-2 ">Sign in</a>
            </div>
        </form>
</template>

<script>
    export default {
        data() {
            return {
                error: false,
                email: '',
                name: '',
                password: '',
                passConfirm: '',
                errMessage: ''
            }
        },
        methods: {
            register() {
                axios.post('/register', {
                    name: this.$data.name,
                    email: this.$data.email,
                    password: this.$data.password,
                    password_confirmation: this.$data.passConfirm
                }).then(()=> window.location.href= '/').catch((err)=> {
                    console.log(err.response.data);
                    this.$data.error = true;
                    this.$data.errMessage = 'please check the field';
                    });
            }
        },
    }
</script>

<style lang="scss" scoped>
    @mixin register-form_size{
        width: 100vw;
        height: 100vh;
    }
    .register-form{
        @include register-form-size();
    }
    @mixin register-inputs_size{
        width: 100%;
    }
    @mixin register-inputs_pos{
        bottom: 0;
        padding-bottom: 150px;

    }
    .register-inputs-container{
        @include register-inputs_size();
        @include register-inputs_pos();
    }
    @mixin inputs-for-register_size{
        width: calc(100vw - 40px);
        height: 80px;
        margin: 0 20px 0 20px;
    }
    @mixin inputs-for-register_vis{
        text-indent: 20px;
    }
    .inputs-for-register{
        @include inputs-for-register_size();
        @include inputs-for-register_vis();
    }
    .label{
        margin: 20px 0 0 20px;
        font-weight: normal;

    }
    @mixin btn-submit-container_size{
        width: 100%;

    }
    @mixin btn-submit-container_pos{
        position: absolute;
        bottom: 0;
        margin: 0 20px 0 0;

    }
    .btn-submit-container{
        @include btn-submit-container_pos();
        @include btn-submit-container_size();
    }
    @mixin btn-link-sign-in_size{
        padding: 30px;
        margin: 0 0 0 20px;
    }
    @mixin btn-link-sign-in_pos{
        float: left;
    }
    .btn-link-sign-in{
        @include btn-link-sign-in_size();
        @include btn-link-sign-in_pos();
    }
    @mixin btn-register_size{
        padding: 30px;
    }
    @mixin btn-register_pos{
        float: right;
        margin: 0 20px 20px 0;
    }
    
    .btn-register{
        @include btn-register_pos();
        @include btn-register_size();
    }

</style>
