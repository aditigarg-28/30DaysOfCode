import React,{Component} from 'react'
import RegularComp from './RegularComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'

class ParentComp extends Component {
constructor(props){
    super(props)
this.state={
name:'Aditi'
}
}
componentDidMount(){
    setInterval(()=>{
        this.setState({
            name:'Aditi'
        })
    },2000)
}
render(){
    return(
    <div>
        <MemoComp name={this.state.name}/>
    </div>    
    )
}
}

export default ParentComp