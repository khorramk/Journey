<template>
    <div class="login-wrapper absolute pt-middle-top-space">
        <form class="login-wrapper__form-login-contianer" v-on:submit.prevent="login">
            <div class="form-login-contianer__login-inputs-container flex flex-col w-full ">
                <label for="email" class="login-inputs-container__login-email"></label>
                <input id="email" type="email" class="login-inputs-container__login-email-input mx-left-right-space shadow-md  border-4 h-login-inputs-size w-bar-szie border border-4 mb-bottom-spacing font-bold border-black"
                 v-model="email" name="email" value="old email" required autocomplete="email" autofocus placeholder="Email">
                <div v-if="error"  class="login-inputs-container__wrapper">
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ this.$data.fallback }}</strong>
                    </span>
                </div>
                <label for="password" class="login-inputs-container col-md-4 "></label>
                <input id="password" v-model="password" type="password" class="login-input-passsword mx-left-right-space shadow-md border-4 h-login-inputs-size w-bar-size border border-4 mb-bottom-spacing shadow-inside-shadow font-bold border-black" name="password" required autocomplete="current-password" placeholder="Password">
                <div  v-if="error" class="wrapper">
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ this.$data.fallback }}</strong>
                    </span>
                </div>
            </div>
            <div class="form-login-container__submit-redirection-components w-bar-size mx-left-right-space relative">
                <a class="submit-redirection__link w-100 bg-pure-white border-2 h-100 p-link-spacing absolute" href="/register">Register</a>
                <button type="submit" class="submit-redirection__btn-login w-100 bg-leaf-green  border-4 border-black w-login-btn-width absolute right-0 h-100 p-login-spacing ">
                login
                </button>
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

</style>
