const INITIAL_STATE ={
    user:null,
    token:null,
}
const reducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case "SET_USER":
            return {
                ...state,
                user:action.payload
            }
        case "SET_TOKEN" :
            return {
                ...state,
                token:action.token
            }
        default:
            return state;
    }
}
export default reducer;