import Vue from 'vue';
import Vuex from 'vuex';
import avatar from './modules/avatar';
import Posts from './modules/Posts';
Vue.use(Vuex);




const store = new Vuex.Store({
    modules: {
        avatar,
        Posts
    },

})
export default store;
