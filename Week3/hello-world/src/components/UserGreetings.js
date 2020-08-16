import React,{Component} from 'react'
class UserGreetings extends Component {
constructor(props){
    super(props)
this.state={
isLoggedIn:true
}
}
render(){
    return this.state.isLoggedIn && <div>Welcome Mini</div> 
 //   return (
 //        this.state.isLoggedIn ?
   //     <div>Welcome Mini</div>  :
   //     <div>Welcome Aditi</div> 
    //)
  //  if(this.state.isLoggedIn)
   // {
    //return (
    //<div>Welcome Mini</div>    
    //)
    //}
    //else{
      //  return  (
        //<div>Welcome Aditi</div>  
        //) 
   //
   //let message
   //if(this.state.isLoggedIn)
   //{
     //  message=<div>Welcome Mini</div>
   //}
   //else{
    //message=<div>Welcome Aditi</div> 
   //}
//return <div>{message}</div>
   
}
}

export default UserGreetings