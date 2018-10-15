import React, { Component } from 'react';
import UserSection from './UserSection';

export default class Header extends Component {
    render() {
        return (
            <header>
                <div>

                    <div>logo</div>
                    <UserSection />
                    
                </div>
            </header>
        );
    }
}