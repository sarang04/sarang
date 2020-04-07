import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props){
super(props)

this.state = {
    name:'sarang'
}
console.log('LifecyleB constructor')
    }
static getDerivedStateFromProps(props,state){
    console.log('LifecycleB getDerivedStateFromProps')
return null
}

componentDidMount(){
    console.log('LifecycleB componentDidMount')
}

shouldComponentUpdate(){
    console.log('LifecycleB render')
    return true
}
 getSnapshotBeforeUpdate(){
     console.log('LifecycleB getSnapshotBeforeUpdate')
     return null

    }

componentDidUpdate(){
    console.log('componentDidUpdateB')
}


    render() {
        console.log('LifecycleB render')
        return (
            <div>
                LifecycleB
            </div>
        )
    }
}

export default LifecycleB
