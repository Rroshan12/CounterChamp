import React, { Component } from 'react'
import './App.css'


export default class Clock extends Component {
    constructor(props){
        super(props);
        this.state={
            days: 0,
            hours: 0 ,
            mins:  0 ,
            secs: 0
        }
    }
    componentWillMount(){
        this.getTime(this.props.deadline);
    }
    componentDidMount(){
        setInterval(() => this.getTime(this.props.deadline), 1000);
    }
 leading0(num){
    return num<10 ? '0'+num :num;
 }
    getTime(deadline){
        
        const time = Date.parse(deadline) - Date.parse(new Date());
        console.log('time',time);
        const seconds=Math.floor((time/1000) %60);
        const minutes=Math.floor((time/1000/60) % 60);
        const hour=Math.floor(time/(1000*60*60)% 24);
        const day=Math.floor(time/(1000*60*60*24));
     
        this.setState({days:day , hours:hour,mins: minutes, secs:seconds});


    }
    render() {
        return (
            <div className="inline" >
          <div>
          {this.leading0(this.state.days)} Days ,     
            </div>
            <div>{this.leading0(this.state.hours)} Hour ,</div>
            <div>{this.leading0(this.state.mins)}Minutes ,</div>
            <div>{this.leading0(this.state.secs)} Seconds</div>
          </div>
        )
    }
}
