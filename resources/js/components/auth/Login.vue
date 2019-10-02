<template>
    <div class="login-wrapper">
        <form  v-on:submit.prevent="login">
            <label for="email" class="col-md-4 col-form-label text-md-right">email address</label>
            <input id="email" type="email" class="form-control " v-model="email" name="email" value="old email" required autocomplete="email" autofocus>
            <div v-if="error"  class="wrapper">
                <span class="invalid-feedback" role="alert">
                <strong>{{ this.$data.fallback }}</strong>
                </span>
            </div>
            <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>
                <input id="password" v-model="password" type="password" class="form-control " name="password" required autocomplete="current-password">
                <div  v-if="error" class="wrapper">
                    <span class="invalid-feedback" role="alert">
                    <strong>{{ this.$data.fallback }}</strong>
                    </span>
                </div>

                <input class="form-check-input" type="checkbox" name="remember" id="remember">
                <label class="form-check-label" for="remember">
                <h2>remember me</h2>
            </label>
            <button type="submit" class="btn btn-primary">
                login
            </button>
            <!-- @if (Route::has('password.request'))
            <a class="btn btn-link" href="{{ route('password.request') }}">
            {{ __('Forgot Your Password?') }}
            </a>
            @endif -->
        </form>
        <a href="/register">Register</a>
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
                    .then(()=> window.location.href = '/dashboard').catch(()=> {
                        this.$data.error = true;
                        this.$data.fallback = 'invalid auth';
                    
                    })
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>