import React, { Component } from 'react';
import { connect } from 'react-redux';
import {loginUser} from '../../ducks/reducer'
import Login from './Login';
import UpdateName from './UpdateName';


class Content extends Component {
    render() {
    const {user, loginUser } = this.props

        return (
            <div className='content'>
                <div>
                {user ? 
                <div>
                    {`${user} is super cool`}
                    <UpdateName />
                </div>
                :
                <Login login={loginUser}/>}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = {
    loginUser: loginUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)