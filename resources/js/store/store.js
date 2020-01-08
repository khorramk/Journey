import Vue from 'vue';
import Vuex from 'vuex';
import avatar from './modules/avatar';
import Posts from './modules/Posts';
import Modal from './modules/Modal';
import Button from './modules/Button';
<<<<<<< HEAD
import closeButton from './modules/closeButton';
import comment from './modules/comment';
import Country from './modules/Country';
import visited from './modules/visited';
import WishList from './modules/WishList';
=======
>>>>>>> parent of 0c12f6d... fixed add btn layout and  visual design and fixed modal for avatar
Vue.use(Vuex);




const store = new Vuex.Store({
    modules: {
        avatar,
        Posts,
        Modal,
<<<<<<< HEAD
        Button,
        closeButton,
        comment,
        Country,
        visited,
        WishList,
=======
        Button
>>>>>>> parent of 0c12f6d... fixed add btn layout and  visual design and fixed modal for avatar
    },

})
export default store;
