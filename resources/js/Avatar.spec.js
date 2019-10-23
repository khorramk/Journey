import { mount } from '@vue/test-utils';
import Vue from 'vue';
import axios from 'axios';
import VueRouter from 'vue-router';
import Avatar from './components/dashboard/Avatar';
import expectExport from 'expect';


const vm = new Vue(Avatar);

it('renders the elements', () => {

    vm.$nextTick().then(()=> {

     expect(vm).toMatchSnapshot();
    }).catch().finally()
  })
