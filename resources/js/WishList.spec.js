import { mount } from '@vue/test-utils';
import Vue from 'vue';
import axios from 'axios';
import VueRouter from 'vue-router';
import WishList from './components/Visited/WishList';


const vm = new Vue(WishList);

it('renders the elements', () => {

    vm.$nextTick().then(()=> {

     expect(vm).toMatchSnapshot();
    }).catch().finally()
  })
