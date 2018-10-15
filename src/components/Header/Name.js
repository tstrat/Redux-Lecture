import React, { Component } from 'react';

export default class Name extends Component {

    render() {
        return (
            <div>
                {this.props.user || 'please login'}
            </div>
        );
    }
}