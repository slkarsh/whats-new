import React, { Component } from 'react';
import local from '../../data/local';
import './App.css';
import NewsArticle from '../NewsArticle/NewsArticle';
import NewsContainer from '../NewsArticle/NewsContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      local
    }
  }

  render () {
    return (
      <div className="app">
        <h2>App here</h2>
        <NewsContainer local={this.state.local} />
      </div>
    );
  }
}

export default App;
