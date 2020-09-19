import React, {Component} from 'react';
import './App.css';
import data from "./assets/data"
import Display from "./Components/Display"
import InputOutput from './Components/InputOutput'
import Header from "./Components/Header"

export default class App extends Component{
  constructor(props){
    super(props);
  
  }

  render(){
   

  
    return (
      <div className="App">
        <Header/>
        <InputOutput/>
      </div>
    
    );
  }
}


