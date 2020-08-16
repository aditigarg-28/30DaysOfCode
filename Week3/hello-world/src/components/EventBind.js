import React,{Component} from 'react'
class EventBind extends Component {
constructor(props){
    super(props)
this.state={
message:"Hello"
}
this.changeValue=this.changeValue.bind(this)
}
changeValue(){
    this.setState({
        message:"good bye"
    })

}
render(){
    return(
    <div>
         <div>{this.state.message}</div>
          {/*<button onClick={this.changeValue.bind(this)}>Approach1</button>
        <button onClick={()=>this.changeValue()}>Approach2</button>*/}
         <button onClick={this.changeValue}>Approach3</button>
</div>
    )
}
}
     

export default EventBind