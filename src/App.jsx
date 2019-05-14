import React, { Component } from 'react'
import './App.css';
import Clock from './Clock'
import {Form, FormControl,Button} from 'react-bootstrap'

export default class App extends Component {
    constructor(props){
        super(props);
        this.state={
             deadline: 'july 25,2019',
             newDeadline:''
        } //this is object
    } /* this is properties
    */
   changeDeadline()
   {
       this.setState({deadline:this.state.newDeadline})
   }

    render() {
        return (
            <div className="App">
            <div className="App-title"> Countdown To {this.state.deadline}</div>
            <Clock
              deadline={this.state.deadline} />
    
          <Form inline className="left" >
              <FormControl placeholder='new date' className="Deadinline-input" onChange={event  =>this.setState({newDeadline: event.target.value})}/>
              <Button onClick={() => this.changeDeadline()}>Submit</Button>
          </Form>
          
            </div>
        ) //this is methos
    }
}
