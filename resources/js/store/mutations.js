
const mutations = {
     openModal: (state)=> {
        state.open = true;
     },
     uploadImage: (state, path)=> {
         state.path = path;
     },
     loadPosts: (state, posts)=> {
        state.allPosts = posts;
     },
     loadUsersPosts: (state, posts) => {
        state.usersPosts = posts;
     }


}

export default mutations;
