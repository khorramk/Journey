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
    },
    incrementKey: (context)=> {
        context.commit('changeKey');
    },
    openCommentModal: (context, id)=> {
        context.commit('commentModal', id);
    },
    closeCommentModal: (context) => {
        context.commit('commentModalClose');
    },
    disableButton: (context) => {
        context.commit('turnOfTheButton');
    },
    enableButton: (context)=> {
        context.commit('turnOnTheButton');
    },
    AddCountry: (context)=> {
        context.commit('loadModal');
    },
    store_image_file: (context, file)=> {
        context.commit('store_image', file)
    },
    AddPosts: (context)=> {
        context.commit('putPosts')
    }
}
export default actions;
