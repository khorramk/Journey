const actions = {
    showImage: (context, path)=> {
        context.commit('uploadImage', path);
    }
}
export default actions;
