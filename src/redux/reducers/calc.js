// se hace la función del reducer como parametros recibe (estado:donde se va a almacenar la info, action:
// trae la info y el tipe)
// action types, por buena practica se llama en
const initialValue={}

const calcReducer=(state = initialValue,action)=>{
    switch(action.type){
        case"sum":
            return (state=state+action.payload);
        case"res":
            return (state=state-action.payload);
        default:
            return state;

    }    

}

export default calcReducer;