<template>
    <div class="nav nav-container  navigation bg-pale-water ">
        <ul class="nav-list ">
            <li class="block  ">
                <img class="quarter-width" src="https://img.icons8.com/material/24/000000/home--v5.png" alt="dashboard" @click="popLogOutBtn">
            </li>
            <li class="block  ">
                <router-link class="nav-links menu-item " to="/history"><img class="quarter-width" src="https://img.icons8.com/cotton/64/000000/time-machine.png" alt="history"></router-link>
            </li>
            <li class="block  ">
                <router-link class="nav-links menu-item " to="/visited"><img class="quarter-width" src="https://img.icons8.com/pastel-glyph/64/000000/location-update.png" alt="visited"></router-link>
            </li>
            <li class="block  ">
                <router-link class="nav-links menu-item " to="/wishlist"><img class="quarter-width" src="https://img.icons8.com/material-sharp/24/000000/bookmark-ribbon.png" alt="wishlist"></router-link>
            </li>
        </ul>
        <div v-if="showBtn" class="popup absolute popup-background pop-up-size" @mouseleave="showBtn = false">
           
            <div class="show-route-to-dashboard__modify-showBtn dashboard-link-size" @click="showBtn = false">
                <router-link class="logout-pop-up text" to="/">Dashboard</router-link>
            </div>
            <form class="logout-pop-up " v-on:submit.prevent="logout">
                <button type="submit" class="log-out-btn text-center" >Log Out</button>
            </form>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                showBtn: false
            }
        },
        methods: {
            popLogOutBtn() {
                console.log('test');
                this.$data.showBtn = true;
            },
            logout(){
                console.log('test');
                axios.post('/logout').then(()=> window.location.href = '/')
            }
        },
    }
</script>

<style lang="scss" scoped>
    @mixin drop-down-block{
        background: grey;
        padding: 20px;
      
    }
    @mixin  nav-size{
        width:100%;
        height: 80px;
    }
    @mixin nav-pos{
        top: 0;
        position: sticky;
        z-index: 2;
    }
    @mixin pop-up_pos{
        position: absolute;
        z-index: 1;
    }   
    @mixin change_upon_hover{
        background: white;
    }
     .navigation{
        @include nav-pos();
        @include nav-size();
    }
    @mixin quarter-width_size{
        width: 40px;
        height: 40px;
        margin:0 0 0 50px;

    }
    @mixin quarter-width_pos{
        float:left;
    }
    
    .quarter-width{
       @include quarter-width_size();
       @include quarter-width_pos();

       
    }
    .log-out-btn{
        @include drop-down-block;
        
        
    }
    .log-out-btn:hover{
            @include change_upon_hover();
        }
    .popup-background{
        // background: red;
    }
    .pop-up-size{
        width: 100px;
        height: 100px;
    }
    .dashboard-link-size{
        @include drop-down-block;
       
    }
     .dashboard-link-size:hover{
            @include change_upon_hover();
        }
    .pop-up{
        @include pop-up_pos();
    }
    .pop-up:hover{
        background: white;
    }
    @mixin nav-list_size{
        width: 100%;
        height: 100%;
        padding: 20px 0 0 0;
    }
    .nav-list{
        @include nav-list_size();
    }
    
</style>
