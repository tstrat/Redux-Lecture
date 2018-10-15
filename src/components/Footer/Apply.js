import React, { Component } from 'react';
import Name from '../Header/Name';

export default class Apply extends Component {
    render() {
        return (
            <div>
                <Name user={this.props.user} />
            </div>
        );
    }
}