import React, {Component} from 'react'
class Master extends Component{
    render () {
        return (<div className='dialog-master'>{this.props.children}</div>)
    }
}
export default Master;