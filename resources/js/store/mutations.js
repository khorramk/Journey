
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
     openModal: (state)=> {
         state.open = true;
     },
     showClosebtn: (state)=> {
         state.add = false;
     },
     close: (state)=> {
         state.close = false;
     }


}

export default mutations;
