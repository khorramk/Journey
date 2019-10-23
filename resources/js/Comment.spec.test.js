import { mount } from '@vue/test-utils';
import Vue from 'vue';
import axios from 'axios';
import VueRouter from 'vue-router';
import Comments from './components/CommentsBlock/Comments';
import expectExport from 'expect';


const vm = new Vue(Comments);

it('renders the elements', () => {

    vm.$nextTick().then(()=> {

     expect(vm).toMatchSnapshot();
    }).catch().finally()
  })
