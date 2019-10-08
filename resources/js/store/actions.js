const actions = {
    showImage: (context, path)=> {
        context.commit('uploadImage', path);
    },
    getUserPosts: (context, posts)=> {
        context.commit('loadUsersPosts', posts)
    },
    getAllPosts: (context, posts)=> {
        context.commit('loadPosts', posts);
    },
    closeModal: (context) => {
        context.commit('closeSwitchedOn');
    },
    showModal: (context) => {
        context.commit('openModal');
    },
    showClosebtn: (context)=> {
        context.commit('showClosebtn');
    },
    closeModal: (context) => {
        context.commit('close');
    }
}
export default actions;
