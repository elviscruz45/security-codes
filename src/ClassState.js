import React from "react"
import { Loading} from "./Loading"

const SECURITY_CODE="paradigma"

class  ClassState extends React.Component{
    constructor(props){
        super(props)
        this.state={
            value:"",
            error:false,
            loading:false
        }
    }

    //componentWillMount(){

    // UNSAFE_componentWillMount(){

    //     console.log("componentWillMount")
    // }

    // componentDidMount(){
    //     console.log("componentDidMount")
    // }

componentDidUpdate(){
    console.log("Actualizacion")
    if(!!this.state.loading){
        setTimeout(()=>{
        console.log("Haciendo la validacion")

        if(SECURITY_CODE===this.state.value){
            this.setState({error:false,loading:false})
        }else{
            this.setState({error:true,loading:false})
        }


        this.setState({loading:false})
        console.log("Terminando la validacion")
        },3000)
    }
}

    render(){
        // const {error,loading,value}=this.state
        return (
            <div>
                <h2> Eliminar {this.props.name}</h2>
                <p> Por favor, escribe el codigo de seguridad</p>
                {(this.state.error&&!this.state.loading) &&(<p>error, el codigo es incorrecto</p>)}
                {this.state.loading &&(<Loading/>)}

                <input
                value={this.state.value}
                placeholder="Codigo de seguridad"
                onChange={(event)=>{
                    this.setState({value:event.target.value})
                }
            }
                />
                <button
                onClick={()=>this.setState({loading:true})}
                > comprobar</button>
            </div>
        )
    }
    
}

export { ClassState} 