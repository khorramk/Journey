
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
     },
     closeSwitchedOn: (state)=> {
         state.close = false;
     },
     showClosebtn: (state)=> {
         state.add = false;
     },
     close: (state)=> {
         state.close = false;
     },
     removeModal: (state)=> {
         state.close = true;
     },
     popAvatarSelection: (state)=> {
         state.pop = true;
     },
     hideModal: (state) => {
         state.pop = false;
     }


}

export default mutations;
