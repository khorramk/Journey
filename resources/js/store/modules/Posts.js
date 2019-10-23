import mutations from '../mutations';
import actions from '../actions';

const state = {
    usersPosts : [],
    allPosts: [],
    key: 0,
    disable: false
}

export default {
    actions,
    mutations,
    state
}
