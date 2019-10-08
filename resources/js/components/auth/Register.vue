<template>
    <div class="register-container pt-quarter-space-top">
        <form v-on:submit.prevent="register">
            <div class="flex flex-col w-full">
                <label for="name" class="col-md-4 col-form-label text-md-right"></label>
                <div class="col-md-6">
                    <input id="name" type="text" class="mx-left-right-space shadow-md  border-4 h-login-inputs-size w-bar-size border border-4 mb-bottom-spacing font-bold border-black " v-model="name" name="name" value="name" required autocomplete="name" autofocus placeholder="Name">
                    <div v-if="error" class="container">
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    </div>
                </div>
            </div>
            <div class="form-group row">
                <label for="email" class="col-md-4 col-form-label text-md-right"></label>
                <div class="col-md-6">
                    <input id="email" type="email" class="mx-left-right-space shadow-md  border-4 h-login-inputs-size w-bar-size border border-4 mb-bottom-spacing font-bold border-black" v-model="email" name="email" value="Email" required autocomplete="email" placeholder="Email">
                    <div v-if="error" class="container">
                        <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                        </span>
                    </div>
                </div>
            </div>
            <div class="form-group row">
                <label for="password" class="col-md-4 col-form-label text-md-right"></label>
                <div class="col-md-6">
                    <input id="password" type="password" class="mx-left-right-space shadow-md  border-4 h-login-inputs-size w-bar-size border border-4 mb-bottom-spacing font-bold border-black " v-model="password" name="password" required autocomplete="new-password" placeholder="Password">
                    <div v-if="error" class="container">
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    </div>
                </div>
            </div>
            <div class="form-group row">
                <label for="password-confirm" class="col-md-4 col-form-label text-md-right"></label>

                <div class="col-md-6">
                    <input id="password-confirm" type="password" class="mx-left-right-space shadow-md  border-4 h-login-inputs-size w-bar-size border border-4 mb-bottom-spacing font-bold border-black" v-model="passConfirm" name="password_confirmation" required autocomplete="new-password" placeholder="Confirm Password">
                </div>
            </div>
            <div class="w-bar-size mx-left-right-space relative">
                <a href="/" class="w-100 bg-pure-white border-2 h-100 p-link-spacing absolute">log in</a>
                <div class="col-md-6 offset-md-4">
                    <button type="submit" class="w-100 bg-leaf-green  border-4 border-black w-login-btn-width absolute right-0 h-100 p-login-spacing">
                        Register
                    </button>
                </div>
            </div>
        </form>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                error: false,
                email: '',
                name: '',
                password: '',
                passConfirm: ''
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

</style>
