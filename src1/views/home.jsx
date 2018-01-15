import React, {Component} from 'react'
import Dialog from '../components/dialog'
class Home extends Component{
    constructor () {
        super();
        this.tagShow = this.tagShow.bind(this);
    }
    tagShow () {
        this.refs.dialog.show()
    }
    successcb () {
        console.log('确认后的回调')
    }
    render () {
        return (<div className='wrap'>
            <h1 onClick={this.tagShow}>hello world!</h1>
            <Dialog ref='dialog' callback={this.successcb}></Dialog>
        </div>)
    }
}
export default Home;