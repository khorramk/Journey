<template>
        <form class="login-wrapper__form-login-contianer " v-on:submit.prevent="login">
            <div class="login-input-container">
                <label for="email" class="login-email_label label-spacing">Email</label>
                <input id="email" type="email" class="login-inputs-container__login-email-input login-input shadow-md  border-4  border border-4  font-bold border-black"
                 v-model="email" name="email" value="old email" required autocomplete="email" autofocus placeholder="Email">
                <div v-if="error"  class="login-inputs-container__wrapper">
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ this.$data.fallback }}</strong>
                    </span>
                </div>
                <label for="password" class="login-inputs-container label-spacing">Password</label>
                <input id="password" v-model="password" type="password" class="login-input-passsword  shadow-md border-4  border border-4 login-input shadow-inside-shadow font-bold border-black" name="password" required autocomplete="current-password" placeholder="Password">
                <div  v-if="error" class="wrapper">
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ this.$data.fallback }}</strong>
                    </span>
                </div>
            </div>
            <div class="btn-submits-container relative">
                <button type="submit" class="submit-redirection__btn-login btn-submit-login  ">  
                login
                </button>
                <a class="submit-redirection__link btn-link-register" href="/register">Register</a>
            </div>
        </form>
</template>
<script>
    export default {
        data() {
            return {
                error: false,
                email: '',
                password: '',
                fallback: ''
            }
        },
        methods: {
            login() {
                axios.post('/login', {
                    email: this.$data.email,
                    password: this.$data.password,

                })
                    .then(()=> window.location.href = '/').catch(()=> {
                        this.$data.error = true;
                        this.$data.fallback = 'invalid auth';

                    })
            }
        },
    }
</script>

<style lang="scss" scoped>
   @mixin login-form_size{
       width: 100vw;
       height: 100vh;
   }
   @mixin login-form_vis{
       background: rgb(92, 214, 92);
       overflow-y: hidden;


   }
   @mixin login-input_size{
       width: calc(100vw - 40px);
       height: 80px;
       margin-left: 20px;
   }
   @mixin login-input_pos{
       position: absolute;
       
   }
   @mixin login-input_vis{
       text-indent: 20px;
   }
   @mixin login-input-container_size{
       width: 100%;
   }
   @mixin login-input-container_pos{
       position: absolute;
       bottom: 0;
       padding-bottom: 200px;
      // margin-bottom: 100px;
   }
   .login-input-container{
       @include login-input-container_size();
       @include login-input-container_pos();
   }
   @mixin btn-submits-container_pos{
       position: absolute;
       bottom: 0;
       padding-bottom: 100px;
       //margin-bottom: 100px;
    
   }
    .btn-submits-container{
        @include login-input-container_size();
        @include btn-submits-container_pos();
    }
    .login-form{
        @include login-form_size();
        @include login-form_vis();
    }
   @mixin label-spacing{
     //  width: calc(100vw - 30px);
     margin-left: 30px;
   }
   .label-spacing{
       @include label-spacing();
   }
   .login-input{
       @include login-input_size();
       @include login-input_vis();
   }
   @mixin btn-submit_size{
       padding-right: 40px;
       padding-left: 40px;
       padding-top: 25px;
       padding-bottom: 25px;
       

   }
   @mixin btn-submit_pos{
       float: right;
       margin-left: 20px;
       
   }
   .btn-submit-login{
       background: #D1E9C3;
       border: solid 2px black;
       @include btn-submit_size();
       @include btn-submit_pos();
       margin-right: 20px;

   }
   .btn-link-register{
       background: white;
       border: 1px solid black;
       @include btn-submit_size();
       @include btn-submit_pos();
   }
   

</style>
