import Vue from 'vue';
import Vuex from 'vuex';
import avatar from './modules/avatar';
import Posts from './modules/Posts';
import Modal from './modules/Modal';
import Button from './modules/Button';
Vue.use(Vuex);




const store = new Vuex.Store({
    modules: {
        avatar,
        Posts,
        Modal,
        Button
    },

})
export default store;
