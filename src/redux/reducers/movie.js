
const initialValue={}

const movieReducer=(state = initialValue,action)=>{
    switch(action.type){
        case "SET_MOVIE":
            return action.payload
        default:
            return state

    }

}
export default movieReducer