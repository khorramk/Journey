import { mount } from '@vue/test-utils';
import Vue from 'vue';
import axios from 'axios';
import VueRouter from 'vue-router';
import Login from './components/auth/Login';
import expectExport from 'expect';


const wrapper = mount(Login);

const vm = wrapper.vm;

console.log(wrapper);

it('should render', ()=> {
    expect(wrapper.element).toMatchSnapshot();
})
