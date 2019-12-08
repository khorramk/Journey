import Vue from 'vue';
import Vuex from 'vuex';
import avatar from './modules/avatar';
import Posts from './modules/Posts';
import Modal from './modules/Modal';
import Button from './modules/Button';
import closeButton from './modules/closeButton';
import comment from './modules/comment';
import Country from './modules/Country';
import visited from './modules/visited';
import WishList from './modules/WishList';
Vue.use(Vuex);




const store = new Vuex.Store({
    modules: {
        avatar,
        Posts,
        Modal,
        Button,
        closeButton,
        comment,
        Country,
        visited,
        WishList,
    },

})
export default store;
