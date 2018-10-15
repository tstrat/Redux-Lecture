import React, { Component } from 'react';
import Name from './Name';

export default class UserSection extends Component {
    render() {
        return (
            <div className='user-section'>
               <span>User:</span>
                <Name user={this.props.user} />
            </div>
        );
    }
}