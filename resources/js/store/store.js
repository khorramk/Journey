import Vue from 'vue';
import Vuex from 'vuex';
import avatar from './modules/avatar';

Vue.use(Vuex);




const store = new Vuex.Store({
    modules: {
        avatar
    },

})
export default store;
