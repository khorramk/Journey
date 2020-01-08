import { stat } from "fs";

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
<<<<<<< HEAD
     },
     removeModal: (state)=> {
         state.close = true;
     },
     popAvatarSelection: (state)=> {
         state.pop = true;
     },
     hideModal: (state) => {
         state.pop = false;
     },
     changeKey: (state) => {
         state.key += 1;
     },
     commentModal: (state, id)=> {
         state.postID= id;
         state.Modal = true;
     },
     commentModalClose: (state)=> {
         state.Modal = false;
     },
     turnOfTheButton: (state)=> {
         state.disable = true;
     },
     turnOnTheButton: (state)=> {
         state.disable = false;
     },
     loadModal: (state)=>{
         state.openCountryModal = true;
     },
     putPosts: (state)=> {
         state.openPostsModal = true;
     },
     openWishes: (state)=> {
         state.open = true;
=======
>>>>>>> parent of 0c12f6d... fixed add btn layout and  visual design and fixed modal for avatar
     }

}

export default mutations;
