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
<<<<<<< HEAD
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
    },
    addWishes: (context)=> {
        context.commit('openWishes');
=======
        context.commit('close');
>>>>>>> parent of 0c12f6d... fixed add btn layout and  visual design and fixed modal for avatar
    }
}
export default actions;
