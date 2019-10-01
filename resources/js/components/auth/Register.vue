<template>
    <div>
         <form v-on:submit.prevent="register">
                        

        <div class="form-group row">
            <label for="name" class="col-md-4 col-form-label text-md-right">name</label>

            <div class="col-md-6">
                <input id="name" type="text" class="form-control " v-model="name" name="name" value="name" required autocomplete="name" autofocus>

                <div v-if="error" class="container">
                        <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                </div>
                    
                
            </div>
        </div>

        <div class="form-group row">
            <label for="email" class="col-md-4 col-form-label text-md-right">E mail address</label>

            <div class="col-md-6">
                <input id="email" type="email" class="form-control" v-model="email" name="email" value="Email" required autocomplete="email">

                    <div v-if="error" class="container">
                        <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                </div>
            </div>
        </div>

        <div class="form-group row">
            <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

            <div class="col-md-6">
                <input id="password" type="password" class="form-control " v-model="password" name="password" required autocomplete="new-password">

                <div v-if="error" class="container">
                        <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                </div>
            </div>
        </div>

        <div class="form-group row">
            <label for="password-confirm" class="col-md-4 col-form-label text-md-right">Confirm Pasword</label>

            <div class="col-md-6">
                <input id="password-confirm" type="password" class="form-control" v-model="passConfirm" name="password_confirmation" required autocomplete="new-password">
            </div>
        </div>

        <div class="form-group row mb-0">
            <div class="col-md-6 offset-md-4">
                <button type="submit" class="btn btn-primary">
                    Register
                </button>
            </div>
        </div>
    </form>
    <a href="/">log in</a>
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