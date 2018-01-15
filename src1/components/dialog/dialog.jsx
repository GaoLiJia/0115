import React, {Component} from 'react'
import './dialog.css'

import Master from './master.jsx'
import Content from './content.jsx'
import Title from './title.jsx'
import Message from './message.jsx'
import BtnParent from './btnparent.jsx'
import Button from './button.jsx'

class Dialog extends Component{
    constructor () {
        super();
        this.state = {
            isShow: false
        }
        this.close = this.close.bind(this)
        this.concat = this.concat.bind(this)
    }
    show () {
        this.setState((state) => {
            state.isShow = true;
            return state
        })
    }
    close () {
        this.setState((state) => {
            state.isShow = false;
            return state
        })
    }
    concat () {
        this.close()
        this.props.callback()
    }
    render () {
        let {isShow} = this.state;
        return (isShow && <div className='dialog'>
            <Master>
                <Content>
                    <Title>提示信息</Title>
                    <Message>确定hello world吗？</Message>
                    <BtnParent>
                        <Button onClose={this.concat}>确定</Button>
                        <Button onClose={this.close}>取消</Button>
                    </BtnParent>
                </Content>
            </Master>
        </div>)
    }
}
export default Dialog;