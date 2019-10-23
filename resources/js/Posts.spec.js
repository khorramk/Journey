import { mount } from '@vue/test-utils';
import Vue from 'vue';
import axios from 'axios';
import VueRouter from 'vue-router';
import Posts from './components/Posts/Posts';
import expectExport from 'expect';


const wrapper = mount(Posts);

const vm = wrapper.vm;

console.log(wrapper);

it('should render', ()=> {
    expect(wrapper.element).toMatchSnapshot();
})
