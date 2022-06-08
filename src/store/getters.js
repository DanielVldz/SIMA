
const Getters = {
    isLoggedIn: state => state.isLoggedIn,
    getUser: state => state.userSession,
    getUsers: state => state.users,
    getioTData: state => {
        console.log("getting datas")
        if(state.iotValues.length != 0){
            let labelsB = state.iotValues.slice(-99).map((label)=>{
                return label.created_at.split("T")[1];

              })
              let limit=2
              let rangelabel =Math.floor(labelsB.length/limit)-1;
              let valueslabel =Math.floor(state.iotValues.length/limit)-1;

              let valuesb = state.iotValues.map((value) => value.parameter_value);
              let labels=[]
              let series=[]
               for(let x=0; x<=limit;x++){
                labels.push(labelsB[x*rangelabel])
                series.push(valuesb[x*valueslabel])
               }
               labels.push(labelsB[labelsB.length-2])
               series.push(valuesb[labelsB.length-2])
               console.log("state",state.iotValues)
              return{labels,
                series:[series]
            }
        }
   return{label:"",series:[]}
},
getLoading: state => state.loading,
getUserConfig: state => state.user,
}


export default Getters;
