const actions = {
    showImage: (context, path)=> {
        context.commit('uploadImage', path);
    },
    getUserPosts: (context, posts)=> {
        context.commit('loadUsersPosts', posts)
    },
    getAllPosts: (context, posts)=> {
        context.commit('loadPosts', posts);
    }
}
export default actions;
