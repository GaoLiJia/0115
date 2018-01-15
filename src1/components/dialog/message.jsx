import React, {Component} from 'react'

class Message extends Component{
    render () {
        return (<h3>{this.props.children}</h3>)
    }
}
export default Message;