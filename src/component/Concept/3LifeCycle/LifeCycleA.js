import { Component } from "react";


class LifeCycleA extends Component{
    constructor(props){
        super(props)
        this.state ={
            name:"kanchan"
        }
        console.log("lifecycleA constructor")
    }

    

    componentDidMount(){
        console.log("lifecycleA from componentDidMount")
    }
    static getDerivedStateFromProps(props,state){
        console.log("lifecycleA getDerivedStateFromProps ")
        return null
    }

    render(){
        console.log("lifecycleA from render")
        return <div>LifeCycleA</div>
    }
}

export default LifeCycleA