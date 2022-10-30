import React from "react"

const SECURITY_CODE="paradigma"

function UseReducer({name}){
    const [state,dispatch]=React.useReducer(reducer,initialState)

    console.log(state)

 React.useEffect(()=>{
        console.log("Empezando el efecto")

        if(state.loading){setTimeout(()=>{
            console.log("Haciendo la validacion")

            if(state.value===SECURITY_CODE){
                dispatch({type:"CONFIRM"})
            }else{
                dispatch({type:"ERROR"})
            }
            
            console.log("Terminando la validacion")
        },3000)}

        console.log("Terminando el efecto")


    },[state.loading])


    if(!state.deleted && !state.confirmed ){
        return (
        <div>
            <h2> Eliminar {name}</h2>
            <p> Por favor, escribe el codigo de seguridad</p>


    {(state.error &&!state.loading) &&(<p>error, el codigo es incorrecto</p>)}
    {state.loading &&(<p>Cargando...</p>)}


            <input 
            placeholder="Codigo de seguridad"
            value={state.value}
            onChange={(event)=>{
                dispatch({type:"WRITE",payload:event.target.value})
                //onWrite(event.target.value)
            }}
            />
            <button onClick={()=>{
                dispatch({type:"CHECK"})
                

                }}> comprobar</button>
        </div>
    )}else if(!!state.confirmed && !state.deleted){
        return(
            <React.Fragment>
                <p> Pedimos confirmaicon, estsa seguro?</p>
                <button
                onClick={()=>{
                    dispatch({type:"DELETE"})


                    }}>
                
                Si, eliminar

                </button>
                <button
                  onClick={()=>{
                    dispatch({type:"RESET"})

                }}
                > No, estoy arrepentido</button>
            </React.Fragment>
        )
    }else{
        return(
            <React.Fragment>
                <p> Estado de eliminado con exito</p>
                <button
                  onClick={()=>{
                    dispatch({type:"RESET"})
                }}
                >Resetear, volver atras</button>
            </React.Fragment>
        )
    }
}

// use reducer

const initialState= {
    value:'paradigma',
    error:false,
    loading:false,
    deleted:false,
    confirmed:false

}

const reducerOBJECT = (state,payload) => ({

    'CONFIRM': {
        ...state,
        error: false,
        loading: false,
        confirmed: true,
    },
    'ERROR': {
        ...state,
        error: true,
        loading: false,
    },
    "WRITE":{
        ...state,
        value:payload
    },
    "CHECK":{
        
        ...state,
        loading:true,
    },
    "DELETE":{
        
        ...state,
        deleted:true,
    },
    "RESET":{
        ...state,
        confirmed:false,
        deleted:false,
        value:""
    },


 })
  
const reducer = (state, action) => {
if (reducerOBJECT(state,action)[action.type]) {
    return reducerOBJECT(state,action.payload)[action.type];
} else {
    return {
        ...state,
    }
}
}


export { UseReducer}
