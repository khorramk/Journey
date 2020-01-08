<template>
<<<<<<< HEAD

        <ul class="nav w-100 navigation">
            <li class="nav-item w-25 border border-dark">

                <a class="nav-link dropdown-toggle"  role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                     <img src="https://img.icons8.com/material/24/000000/home--v5.png"  class="w-100 " alt="dashboard" @click="popLogOutBtn">
                </a>

                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <router-link class="dropdown-item" to="/">Dashboard</router-link>
                    <form class="logout-pop-up " v-on:submit.prevent="logout">
                        <button type="submit" class="log-out-btn text-center" >Log Out</button>
                    </form>
                </div>
            </li>
            <li class="nav-item w-25 border border-dark">
                <router-link class="nav-link" to="/history"><img class="w-100" src="https://img.icons8.com/cotton/64/000000/time-machine.png" alt="history"></router-link>
            </li>
            <li class="nav-item  w-25 border border-dark">
                <router-link class="nav-link" to="/visited"><img class="w-100" src="https://img.icons8.com/pastel-glyph/64/000000/location-update.png" alt="visited"></router-link>
            </li>
            <li class="nav-item  w-25 border border-dark">
                <router-link class="nav-link" to="/wishlist"><img class="w-100" src="https://img.icons8.com/material-sharp/24/000000/bookmark-ribbon.png" alt="wishlist"></router-link>
            </li>
        </ul>
        <!-- <div v-if="showBtn" class="popup absolute popup-background pop-up-size" @mouseleave="showBtn = false">

            <div class="show-route-to-dashboard__modify-showBtn dashboard-link-size" @click="showBtn = false">
                <router-link class="logout-pop-up text" to="/">Dashboard</router-link>
            </div>

        </div> -->
=======
    <div class="nav nav-container border bg-green-400 sticky w-screen bg-pale-water h-menu-item-height">
        <nav class="nav-container__nav-block inset-y-0.left-0 flex w-nav-bar-size ">
            <div class="dashboard-router-link-container__click-toShow-btn nav-block__nav-links w-menu-item-size border border-black " @click="popLogOutBtn" v-on:mouseleave="showBtn = false">
                Dashboard
            </div>
            <router-link class="nav-block__nav-links w-menu-item-size h-menu-item-height border border-black" to="/history">History</router-link>
            <router-link class="nav-block__nav-links w-menu-item-size h-menu-item-height border border-black" to="/visited">Visited</router-link>
            <router-link class="nav-block__nav-links w-menu-item-size h-menu-item-height border border-black" to="/wishList">WishList</router-link>
        </nav>
        <div v-if="showBtn" class="popup absolute inset-y-0.left-0 py-2 overflow-y-visible bg-white w-nav-bar-size">
            <form class="logout-pop-up " v-on:submit.prevent="logout">
                    <input type="submit" value="log out">
            </form>
            <div class="show-route-to-dashboard__modify-showBtn w-menu-item-size border border-black" @click="showBtn = false">
            <router-link class="logout-pop-up  bg-pale-water" to="/">Dashboard</router-link>

            </div>
        </div>

    </div>
>>>>>>> parent of 0c12f6d... fixed add btn layout and  visual design and fixed modal for avatar
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
<<<<<<< HEAD
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
       background-color: #BBC8CA;
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

=======

>>>>>>> parent of 0c12f6d... fixed add btn layout and  visual design and fixed modal for avatar
</style>
