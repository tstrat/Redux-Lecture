import React, { Component } from 'react';
import Login from './Login'
import { connect } from 'react-redux';

class Content extends Component {
    render() {
        return (
            <div className='content'>
                <div>
                {this.props.user ? `${this.props.user} is super cool` : <Login />}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    };
}

export default connect(mapStateToProps)(Content);
