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
    showModal: (context) => {
        context.commit('openModal');
    },
    showClosebtn: (context)=> {
        context.commit('showClosebtn');
    },
    closeModal: (context) => {
        context.commit('removeModal');
    },
    openAvatar: (context) =>{
        context.commit('popAvatarSelection');
    },
    closeSelection: (context) => {
        context.commit('hideModal');
    }
}
export default actions;
