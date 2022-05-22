const Mutations = {
    logIn(state,payload){
        return state.userSession = payload
     },
     isLoggedIn(state){
         console.log('in here dude')
       return state.isLoggedIn=true
     },
     setRequestMessage(state,payload){
      return state.requestMessage = payload;
     }
}

export default Mutations;