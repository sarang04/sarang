import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class Lifecycle extends Component {
    constructor(props){
super(props)

this.state = {
    time: new Date().toLocaleString()

    // name:'sarang'

}
console.log('LifecyleA constructor')
    }
static getDerivedStateFromProps(props,state){
    console.log('Lifecycle getDerivedStateFromProps')
return null
}

componentDidMount(){
    console.log('LifecycleA componentDidMount')
    this.intervalID = setInterval(
        () => this.tick(),
        10000
      );
}
componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      time: new Date().toLocaleString()
    });
  }

shouldComponentUpdate(){
    console.log('LifecycleA render')
    return true
}
 getSnapshotBeforeUpdate(){
     console.log('LifecycleA getSnapshotBeforeUpdate')
 return null
    }

componentDidUpdate(){
    console.log('componentDidUpdateA')
}

changeState = () => {
    this.setState({
        name: 'Rapidops'
    })

}

    render() {
        console.log('LifecycleA render')
        return (
            <div>
            <div> LifecycleA</div>
            <button onClick={this.changeState} >Change state</button>
            <LifecycleB />
            <p className="App-clock">
            The time is {this.state.time}
          </p>
            </div>
        )
    }
}

export default Lifecycle
