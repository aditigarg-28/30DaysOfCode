import React, { Component } from 'react'
class LifeCycleA extends Component{
    constructor(){
        super()
        this.state={
         name:'aditi'  
        }
        console.log('LifeCycleA Constructor')
    }
    static getDerivedStateFromProps(props,state)
    {
        console.log('LifeCycleA getDerivedStateFromProps')
        return null
    }
    componentDidMount()
    {
        console.log('LifeCycleA componentDidMount')
    }
    shouldComponentUpdate(){
        console.log('LifeCycleA shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('LifeCycleA getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate(){
        console.log('LifeCycle componentDidUpdate')
    }
    changeState=()=>{
        this.setState({
            name:'mini'
        })
    }
    render(){
        console.log('LifeCycleA render')
    return (
        <div>
        <div>LifeCycleA</div>
        <button onClick={this.changeState}>Change State</button>
        </div>
    )
    }
}
export default LifeCycleA