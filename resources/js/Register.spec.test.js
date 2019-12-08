import { mount } from '@vue/test-utils';
import Vue from 'vue';
import axios from 'axios';
import VueRouter from 'vue-router';
import Register from './components/auth/Register';
import expectExport from 'expect';


const wrapper = mount(Register);

const vm = wrapper.vm;

console.log(wrapper);

it('should render', ()=> {
    expect(wrapper.element).toMatchSnapshot();
})
