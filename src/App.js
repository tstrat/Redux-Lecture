import React, { Component } from 'react';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';

import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      user:''
    }

    this.login = this.login.bind(this);
    
  }

  login(name){
    this.setState({
      user: name
    })
  }

  
  render() {
    return (
      <div className="App">
      <Header user={this.state.user} />
      <Content user={this.state.user} login={this.login} />
      <Footer user={this.state.user} />
      </div>
    );
  }
}

export default App;
