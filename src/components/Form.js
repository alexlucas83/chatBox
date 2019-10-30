import React, { Component } from 'react'

export default class Form extends Component {

    state = {
        message:'',
        length:this.props.length,

    }

    handelSubmit = (e) =>{
        e.preventDefault()
        this.creatMessage()
    }

    handelChange = (e) =>{
        const message = e.target.value
        const length = this.props.length - message.length
        this.setState({message, length})

    }

    creatMessage = () => {
        const {addMessage , pseudo, length} = this.props
        const message = {
            pseudo,
            message:this.state.message
        }
        addMessage(message)
        //reset message
        this.setState({message:'', length})
    }

    handelKeyUp = (e) => {
        if (e.key === 'enter') {
            this.creatMessage()
        }
    }

    render() {
        return (
            <form className="form"
            onSubmit={this.handelSubmit}>
                <textarea
                value={this.state.message}
                onChange={this.handelChange}
                onKeyUp={this.hendelKeyUp}
                required
                maxLength={this.props.length}/>
                    <div className="info">{this.state.length}</div>
                    <button type="submit">
                        envoyer !
                    </button>
            </form>
        )
    }
}

