const Mutations = {
  initialiseStore(state) {
    // Check if the ID exists
    if(localStorage.getItem('store')) {
      // Replace the state object with the stored item
      this.replaceState(
        Object.assign(state, JSON.parse(localStorage.getItem('store')))
      );
    }
  },
    logIn(state,payload){
        return state.userSession = payload
     },
     logOut(state){
       state.isLoggedIn = false;
       return state.userSession = {}
     },
     isLoggedIn(state){
       return state.isLoggedIn=true
     },
     setRequestMessage(state,payload){
      return state.requestMessage = payload;
     },
     setUsers(state,payload){
      return state.users = payload;
     },
     setValues(state,payload){
       return state.iotValues = payload;
     },
     startLoading(state){
       return state.loading=true;
     },
     stopLoading(state){
       return state.loading=false;
     },
     setUser(state,payload){
        return state.user=payload;
     }
}

export default Mutations;