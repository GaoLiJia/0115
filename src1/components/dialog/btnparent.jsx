import React, {Component} from 'react'

class BtnParent extends Component{
    render () {
        return (<div className='btnsDiv'>{this.props.children}</div>)
    }
}
export default BtnParent;