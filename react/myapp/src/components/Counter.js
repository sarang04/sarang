import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props){

        super(props)
        this.State = {
            count:0
        }
    }
    
    increment(){
        this.state.count = this.state.count + 1
        console.log(this.state.count)
    }
   
    
    render() {
        return (
            <div>
            <div>
                count={this.State.count}
            </div>
            <button onClick={() => this.increment }>Increment</button>
            </div>
       
        )
    }
}

export default Counter
