import React, { Component } from 'react';
import { loginUser } from '../../ducks/reducer';
import { connect } from 'react-redux';

class Login extends Component {
    constructor(){
        super()
        this.state = {
            name: ''
        }
    }


    render() {
        return (
            <div>
                <h1>Login!</h1>
                <input value={this.state.name} onChange={(e) => this.setState({name: e.target.value})}/>
                <button onClick={() => this.props.loginUser(this.state.name)}>Submit</button>
            </div>
        );
    }
}



export default connect(null, {loginUser})(Login);