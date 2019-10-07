
const mutations = {
     openModal: (state)=> {
        state.open = true;
     },
     uploadImage: (state, path)=> {
         state.path = path;
     }


}

export default mutations;
