import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

export default class Connexion extends Component {

    state = {
        pseudo :'',
        goToChat : false,
    }

    handelChange = (e) => {
        const pseudo = e.target.value
        this.setState({pseudo})
    }

    handelSubmit = (e) => {
        e.preventDefault()
        this.setState({goToChat:true})
    }
    render() {

        if(this.state.goToChat){
            return <Redirect push to={`/pseudo/${this.state.pseudo}`}/>
        }
        return (
            <div className='connexionBox'>
                <form className="connexion" onSubmit={this.handelSubmit}>
                    <input
                    value= {this.state.pseudo}
                    onChange= {this.handelChange}
                    type="text"
                    placeholder="pseudo"
                    className="connexionInput text-center"
                    required/>
                    <button type="submit">Valider</button>

                </form>
                
            </div>
        )
    }
}
