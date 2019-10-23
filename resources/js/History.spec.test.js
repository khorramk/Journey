import { mount } from '@vue/test-utils';
import Vue from 'vue';
import axios from 'axios';
import VueRouter from 'vue-router';
import history from './components/history/history';

const vm = new Vue(history);

it('renders the elements', () => {

    vm.$nextTick().then(()=> {

     expect(vm).toMatchSnapshot();
    }).catch().finally()
  })
