import React, { Component } from 'react';
import Routes from './routes';
import axios from 'axios';

import './App.css';

const axiosInst = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

class App extends Component {

  state = {
    hello: null
  }

  componentDidMount() {
    // this.asyncFunction();
    // axiosInst.get('/posts')
    // .then(res => console.log(res.data))
    // .catch(err => console.log(err))
  }

  asyncFunction = async() =>  {
    await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(json => console.log(json))
  }

  render() {
    return (
      <div className="App">
        {this.state.hello ? <div>{this.state.hello} </div>  : null }
        <Routes />
      </div>
    );
  }
  
}

export default App;
