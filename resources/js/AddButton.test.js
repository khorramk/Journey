
import { mount } from '@vue/test-utils';
import Vue from 'vue';
import axios from 'axios';
import VueRouter from 'vue-router';
import AddButton from './components/Visited/AddButton';
import expectExport from 'expect';


const wrapper = mount(AddButton);

const vm = wrapper.vm;

console.log(wrapper);

it('should render', ()=> {
    expect(wrapper.element).toMatchSnapshot();
});
