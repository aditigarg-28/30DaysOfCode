import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent';
import UserGreetings from './components/UserGreetings'
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css';
import styles from './appStyles.module.css';
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';
import FragmentDemo from './components/FragmentDemo';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import MemoComp from './components/MemoComp';
import RefsDemo from './components/RefsDemo';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
class  App extends Component {
  render(){
  return (
    <div className="App">
      
      <Hero herName="SuperMan"/>
      <Hero herName="Joker"/>
     {/* </ErrorBoundary>*/}
      <PortalDemo/>
      <RefsDemo/>
      <MemoComp/>
      <ParentComp/>
      {/*<FragmentDemo/>
      <LifeCycleA/>
      <Form/>
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
      <Inline/>
      <Stylesheet/>
      <NameList/>
      <UserGreetings/>
      <ParentComponent/>
      <EventBind/>
      <FunctionClick/>
      <Counter/>
      <Message/>
    <Greet name="Mini" lastName="Agrawal"><p>Hello myself aditi garg</p></Greet>
     <Greet name="Aditi" lastName="Garg" ><button>OK</button></Greet>
     <Welcome name="Mini" lastName="Agrawal" />
    <Welcome name="Aditi" lastName="Garg"/>
      <Hello />*/}
    </div>
  );
}
}
export default App;
