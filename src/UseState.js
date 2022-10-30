import React from "react"

const SECURITY_CODE="paradigma"

function UseState({name}){
    const [state,setState]=React.useState({
        value:'',
        error:false,
        loading:false,
        deleted:false,
        confirmed:false

    })
    // const [value,setValue]=React.useState('')
    // const [error,setError]=React.useState(false)
    // const [loading,setLoading]=React.useState(false)

    console.log(state)



 React.useEffect(()=>{
        console.log("Empezando el efecto")

        if(state.loading){setTimeout(()=>{
            console.log("Haciendo la validacion")

            if(state.value===SECURITY_CODE){
                setState({
                    ...state,
                    error:false,
                    loading:false,
                    confirmed:true,
                })
            // setLoading(false)

            }else{
                setState({
                    ...state,
                    loading:false,
                    error:true
                })
                // setError(true)
                // setLoading(false)
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
                // setError(false)
                //setValue(event.target.value)
                setState({
                    ...state,
                    value:event.target.value
                })
            }}
            />
            <button onClick={()=>{
                // setError(false)
                setState({
                    ...state,
                    loading:true,
                })
                //setLoading(true)
                }}> comprobar</button>
        </div>
    )}else if(!!state.confirmed && !state.deleted){
        return(
            <React.Fragment>
                <p> Pedimos confirmaicon, estsa seguro?</p>
                <button
                onClick={()=>{
                    setState({
                        ...state,
                        deleted:true,
                    })}}>
                
                Si, eliminar

                </button>
                <button
                  onClick={()=>{
                    setState({
                        ...state,
                        confirmed:false,
                        value:""

                    })}}
                > No, estoy arrepentido</button>
            </React.Fragment>
        )
    }else{
        return(
            <React.Fragment>
                <p> Estado de eliminado con exito</p>
                <button
                  onClick={()=>{
                    setState({
                        ...state,
                        confirmed:false,
                        deleted:false,
                        value:""
                    })}}
                >Resetear, volver atras</button>
            </React.Fragment>
        )
    }
}

export { UseState}