import { mount } from '@vue/test-utils';
import Vue from 'vue';
import axios from 'axios';
import VueRouter from 'vue-router';
import Dashboard from './components/dashboard/Dashboard';

const vm = new Vue(Dashboard);

it('renders the elements', () => {

    vm.$nextTick().then(()=> {

     expect(vm).toMatchSnapshot();
    }).catch().finally()
  })
